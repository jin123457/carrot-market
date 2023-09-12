const ChatDetail = () => {
    return (
        <div className="py-10 px-4 space-y-4">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <div key={i}>
                    <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">Hi how much are you selling them for?</div>
                    </div>
                    <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">I want ￦20,000</div>
                    </div>
                    <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">미쳤어</div>
                    </div>
                </div>
            ))}
            <div className="fixed w-full mx-auto px-8 bg-white bottom-0 inset-x-0 py-2">
                <div className="flex relative items-center">
                    <input
                        type="text"
                        className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus outline-none focus:border-orange-500"
                    />
                    <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                        <button className="flex focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 cursor-pointer">
                            &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatDetail;
