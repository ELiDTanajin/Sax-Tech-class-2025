import MenuBar from "@/comp/MenuBar"

export default function Home() {
  return (
    <div>
      <div className="wrapper px-[16px]">
        <header className="flex justify-between items-center">
          <h1 className="text-[50px] font-bold ">Warframe</h1>
          <img className="w-[24px] h-[24px]" src="menu-square.svg"/>
        </header>
        <main>
          <input types="text" placeholder="Search" className="p-[16px] pl-[24px] border-gray-500 border-[1px] rounded-[100px] w-[100%]"/>
        </main>
      </div>
      <div className="wrapper px-[16px] mt-4">
        <img className="w-[100%] mb-4 h-[100%] rounded-[30px]" src="pic2.png"/>
        <img className="w-[100%] mb-4 h-[100%] rounded-[30px]" src="pic3.png"/>
        <img className="w-[100%] mb-20 h-[100%] rounded-[30px]" src="pic4.png"/>
        <MenuBar/>
      </div>
    </div>
  );
}
