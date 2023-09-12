const Chats = () => {
    return (
        <div className="py-10 divide-y-[1px]">
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <div key={i} className="flex px-4 cursor-pointer items-center space-x-3 py-3">
                    <div className="w-12 h-12 rounded-full bg-slate-300" />
                    <div>
                        <p className="text-gray-700">Steve Jebs</p>
                        <p className="text-xs text-gray-500">See you tomorrow in the coner at 2pm!</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
