export default function Loader() {
    console.log("Loader is rendering");
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-700 rounded-full animate-spin"></div>
        </div>
    );
}
