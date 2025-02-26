import { useState } from "react";
import { IoChatboxEllipses, IoSend } from "react-icons/io5";
import { FaTimes, FaPaperclip } from "react-icons/fa";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "store", text: "Halo kak, Lorem ipsum dolor sit amet.", time: "08:00" },
    { id: 2, sender: "user", text: "Halo kak, lorem ipsum dolor sit amet consectetur.", time: "08:00" },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);

  const sendMessage = () => {
    if (input.trim() === "" && !file) return;
    setMessages([...messages, { id: messages.length + 1, sender: "user", text: input, time: "08:01", file }]);
    setInput("");
    setFile(null);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {!isOpen && (
        <button
          className="bg-[#153448] flex items-center space-x-2 text-xl font-semibold gap-2 cursor-pointer text-white py-4 px-6 shadow-2xl hover:bg-blue-950 transition rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <IoChatboxEllipses className="w-6 h-6" /> Chat
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center border-b pb-2">
            <p className="font-semibold text-gray-700 text-lg">Chat</p>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-gray-500 hover:text-red-500" />
            </button>
          </div>

          <div className="h-64 overflow-y-auto p-2 text-sm text-gray-600 bg-gray-100 rounded-md mt-2">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
                <div
                  className={`p-3 max-w-xs text-sm rounded-lg ${msg.sender === "user" ? "bg-green-200" : "bg-white border"}`}
                >
                  <p>{msg.text}</p>
                  {msg.file && <p className="text-blue-500">📎 {msg.file.name}</p>}
                  <span className="text-xs text-gray-500 block text-right">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center mt-2 border-t pt-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-md text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <input
              type="file"
              className="hidden"
              id="file-upload"
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="ml-2 cursor-pointer">
              <FaPaperclip className="text-gray-500 hover:text-gray-700" />
            </label>
            <button
              className="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
              onClick={sendMessage}
            >
              <IoSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;