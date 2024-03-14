import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { getAllData } from 'systeminformation'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('request-system-info', async (event) => {
    const { mem, memLayout, cpu: cpuData, currentLoad, graphics, diskLayout } = await getAllData()

    const cpuCurrentUsage = currentLoad.currentLoad.toFixed(2)

    const cpu = {
      name: cpuData.brand,
      usage: cpuCurrentUsage,
      test: await getAllData()
    }

    const gpuData = graphics.controllers[0]

    const gpu = {
      name: gpuData.name,
      usage: gpuData.utilizationGpu,
      temperature: gpuData.temperatureGpu
    }

    const memory = {
      available: mem.available,
      used: mem.used,
      types: memLayout.map((value) => value.type)
    }
    const disks = diskLayout.map((disk) => ({
      name: disk.name,
      vendor: disk.vendor,
      size: disk.size,
      type: disk.type
    }))

    const systemData = {
      cpu,
      gpu,
      memory,
      disks
    }

    event.reply('system-info-data', systemData)
  })
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
