export default function AppLogo() {
    return (
        <div className="flex items-center gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <img src="assets/logo.svg" width={24} />
            </div>

            <h1 className="text-lg font-bold">StockSaver</h1>
        </div>
    );
}
