import { cls } from "../libs/client/utils";

interface IMessage {
    text: string;
    messageRe?: boolean;
}
const Message = ({ text, messageRe }: IMessage) => {
    return (
        <div className={cls("flex items-start space-x-2", messageRe ? "flex-row-reverse space-x-reverse" : "")}>
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">{text}</div>
        </div>
    );
};

export default Message;
