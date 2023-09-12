import Link from "next/link";

interface chatListProps {
  userName: string;
  message: string;
  detailNumber: Number;
}

const ChatList = ({ userName, message, detailNumber }: chatListProps) => {
  return (
    <Link
      href={`/chats/${detailNumber}`}
      className="flex px-4 cursor-pointer items-center space-x-3 py-3"
    >
      <div className="w-12 h-12 rounded-full bg-slate-300" />
      <div>
        <p className="text-gray-700">{userName}</p>
        <p className="text-xs text-gray-500">{message}</p>
      </div>
    </Link>
  );
};

export default ChatList;
