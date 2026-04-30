
const Loading = () => {
    return (
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 p-4 pt-20">
            {[1,2,3].map((i) => (
                <div key={i} className="border rounded-lg p-4 space-y-3 animate-pulse">
                    <div className="h-40 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
                    <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default Loading;