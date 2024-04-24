import { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDate } from "../../functions"

export function useGemini() {
    const [userMsg, setUserMsg] = useState("")
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const msgContainerRef = useRef(null)
    const genAI = new GoogleGenerativeAI("AIzaSyC42jfrdref0WEUe_LSeTV23JfmvWkLJE0");

    const questAI = async (question) => {
        const currentDate = getDate();
        const generationConfig = {
            maxOutputTokens: 2000,
            temperature: 0.1,
            topP: 0.1,
            topK: 1,
        };
        const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });
        const result = await model.generateContent(question);
        const text = result.response.text();
        setMessages((msgs) => [...msgs, { from: "gpt", date: currentDate, msg: text }]);
        scrollToBottom();
        setLoading(false);
    }

    const makeQuestion = async (e) => {
        e.preventDefault();
        if (userMsg === "") return;
        const formatedDate = getDate();
        const text = userMsg;
        setUserMsg("");
        setMessages((msgs) => [...msgs, { from: "user", date: formatedDate, msg: text }]);
        setLoading(true);
        await questAI(text)
    }
    
    const scrollToBottom = () => {
        msgContainerRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    };

    return {
        userMsg,
        setUserMsg,
        messages,
        loading,
        setLoading,
        msgContainerRef,
        makeQuestion,
        scrollToBottom,
    }    
}