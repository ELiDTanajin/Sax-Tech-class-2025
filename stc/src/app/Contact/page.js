import MenuBar from "@/comp/MenuBar"
import ContactCard from "@/comp/ContactCard"
export default function Contact() {
  return (
    <div className="wrapper p-[16px] flex flex-col gap-[6px]">
      <h1 className="text-[24px] font-bold">
        Contact
      </h1>
      <ContactCard name="Wang Sho" description="A good person" src="Profile1.png"/>
      <ContactCard name="Watoo Shang" description="A good person" src="Profile1.png"/>
      <ContactCard name="Tevee Pei" description="A good person" src="Profile1.png"/>
      <ContactCard name="Fouru Niang" description="A good person" src="Profile1.png"/>
      <MenuBar/>
    </div>
  );
}