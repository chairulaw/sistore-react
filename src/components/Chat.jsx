import { useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-0">
      {!isOpen && (
        <button
          className="bg-[#3C5B6F] flex items-center space-x-2 text-xl font-semibold gap-2 cursor-pointer text-white py-5 px-10 shadow-2xl hover:bg-blue-950 transition"
          onClick={() => setIsOpen(true)}
        >
          <IoChatboxEllipses className="w-6 h-6" /> Chat
        </button>
      )}

      {isOpen && (
        <div
          className="absolute bottom-14 right-0 w-72 bg-white shadow-lg rounded-lg p-4"
          onClick={(e) => e.stopPropagation()} // Tambahin ini
        >
          <p className="font-semibold text-gray-700">Live Chat</p>
          <div className="h-40 overflow-y-auto border p-2 mt-2 text-sm text-gray-600">
            <p>👋 Hi! How can I help you?</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="mt-2 w-full p-2 border rounded-md text-sm"
          />
          <button
            className="mt-2 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Close Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
