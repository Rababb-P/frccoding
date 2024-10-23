export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome to FRC Coding! <br />
          This is a website to teach you how to code for an FRC team, <br />
          starting from the basics of Java and going up all the way to advanced uses of the WPILIB Framework.
        </h1>
        
        <p className="text-lg text-center mb-8">
          This website is currently in its early stages of development and is focusing on training brand new programmers to become intermediate level FRC programmers. For higher level FRC concepts, check out <a href="https://FRCLadder.com" className="text-blue-500 hover:underline">FRCLadder.com</a>
        </p>
      </main>

      <footer className="bg-gray-100 py-4 mt-auto">
        <h2 className="text-xl font-bold text-center">
          Site created by 2024/25 Team 854 FRC Co-Head of Programming, Rababb Pannu. <br></br> All video credits go to original creators.
        </h2>
      </footer>
    </div>
  )
}