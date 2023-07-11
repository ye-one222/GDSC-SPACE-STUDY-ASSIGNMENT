const Logo = () => {
    const stacks = ['React', 'Typescript', 'React Router Dom V6', 'Tailwind CSS']
    return (
        <div className="flex flex-col items-center justify-center gap-32">
            <div className="flex flex-row gap-0">
                <h1 className="bg-gradient-to-br from-red-400 to-red-500 bg-clip-text text-7xl font-bold text-transparent">
                    G
                </h1>
                <h1 className="bg-gradient-to-br from-yellow-400 to-yellow-500 bg-clip-text text-7xl font-bold text-transparent">
                    D
                </h1>
                <h1 className="bg-gradient-to-br from-blue-400 to-sky-500 bg-clip-text text-7xl font-bold text-transparent">
                    S
                </h1>
                <h1 className="bg-gradient-to-br from-emerald-400 to-green-500 bg-clip-text text-7xl font-bold text-transparent">
                    C
                </h1>
            </div>

            <div className="flex flex-row gap-1">
                {stacks.map((stack) => (
                    <DevStack key={stack} name={stack} />
                ))}
            </div>
        </div>
    )
}

const DevStack = ({ name }: { name: string }) => {
    return (
        <span className="px-2 rounded py-0.5 border-b-2 border border-b-emerald-400 border-emerald-200 hover:bg-emerald-500 transition cursor-pointer">
            {name}
        </span>
    )
}

export default function App() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <Logo />
        </main>
    )
}
