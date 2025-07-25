import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const [typedCode, setTypedCode] = useState("");
  const [modalSrc, setModalSrc] = useState("");

  const code = `-
import request, time
def check():
    try:
        r=requests.get("https://www.google.com")
        if r.status_code==200:
            print("Connected")
        else:
            print("Error")
    except:
        print("Disconnected")
def start():
    print("Monitoring...")
    for i in range(3):
        check(),start()-`;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedCode((prev) => prev + (code[i] === "\n" ? "<br>" : code[i]));
      i++;
      if (i >= code.length) clearInterval(typing);
    }, 30);
    return () => clearInterval(typing);
  }, []);

  const gallerySections = [
    { title: "ZIPLY: Letter & Packet Information System Using PHP Native", folder: "/Ziply", count: 12 },
    { title: "ParcelPoint: Letter & Packet Information System Using Laravel 11", folder: "/ParcelPoint", count: 20 },
    { title: "SmartCart: WebCommerce Using React JS", folder: "/SmartCart", count: 20 },
    { title: "Redesign Jurnal Akuntansi Keuangan Bisnis Politeknik Caltex Riau Using Open Journal System", folder: "/JAKB", count: 20 }
  ];

  const designSections = [
    { title: "Logo", folder: "/Logo", files: ["Robotika.png", "23TID.png"] },
    { title: "Stamp & Key Chain", folder: "/Stamp", files: ["JT.png", "MJ.png", "Kelas54.png"] },
    { title: "Packaging", folder: "/Packaging", files: ["Kemojo.png", "Mouse.png"] },
    { title: "Floor Plan", folder: "/FloorPlan", files: ["CB.png", "Acara.png"] },
    { title: "DTF Design", folder: "/DTF", files: ["1.png", "2.png", "3.png"] },
    { title: "Banners", folder: "/Banners", files: ["2.png", "1.png", "3.png", "4.png"] },
    { title: "Invitation", folder: "/Invitation", files: ["1.png", "2.png"] },
    { title: "Certificate", folder: "/Certificate", files: ["1.png", "2.png", "3.png"] },
    { title: "Feed Instagram", folder: "/Feed", files: ["1.png"] },
    { title: "Tickets", folder: "/Ticket", files: ["1.png", "2.png"] }
  ];

  const eventLinks = [
    { label: "Capacity Building 2023", url: "https://www.instagram.com/p/C0g7bibPeGw/" },
    { label: "Metta Permadhis 2024", url: "https://www.instagram.com/p/C3CidN0SQlC/" },
    { label: "Permadhis Goes to School 2024", url: "https://www.instagram.com/p/C4W6bOFv0oO/" },
    { label: "Permadhis Cup 2024", url: "https://www.instagram.com/p/C8CSlliSfAI/" },
    { label: "Design & Multimedia Division Permadhis 2023-2024", url: "https://www.instagram.com/p/C8rsllSyUkf/" },
    { label: "Rapat Anggota XX Permadhis 2024", url: "https://www.instagram.com/p/C9C0JV6vjKE/" },
    { label: "Kathina Permadhis PCR 2024", url: "https://www.instagram.com/p/DC3ms6PymiN/" },
    { label: "Metta Permadhis 2025", url: "https://www.instagram.com/p/DGaHHpgSgXi/" },
    { label: "Zhong Qiu Bersama 2024 (1)", url: "https://www.instagram.com/p/DATFDFjP4ol/" },
    { label: "Zhong Qiu Bersama 2024 (2)", url: "https://www.instagram.com/p/C_78kRovspX/" },
    { label: "Glow On 2024", url: "https://www.instagram.com/p/C_FngbgRYVP/" },
    { label: "Best Project Data Visualization JTI EXPO 3 2025", url: "https://www.instagram.com/p/DFu23PdhqBT/" },
    { label: "Design & Sublim", url: "https://www.instagram.com/p/CM4HJ_tgOAG/" },
    { label: "English Speaking in SLC 2019", url: "https://www.instagram.com/p/BvWq01Xg-Kv/" },
    { label: "3D Animation With Blender Tools", url: "https://drive.google.com/file/d/1MdwNF_UmjqDroGkTJvbO83dVAr5zOxVB/view?usp=classroom_web&authuser=0" },
    { label: "2D Game Development Using RPG Maker MV", url: "https://www.youtube.com/watch?v=McP-Fyn-O6I" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1b16] text-[#a4f9c8] font-[Poppins] flex items-center justify-center p-5">
      <div className="w-full max-w-6xl animate-fadeInUp">
        <div className="flex justify-center mb-4 animate-fadeIn">
          <img
            src="/Images/LogoProfile/1.png"
            alt="Angky Kurniawan Profile"
            className="w-32 h-32 rounded-full border-4 border-[#00ff99] shadow-[0_0_20px_rgba(0,255,153,0.3)] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setModalSrc("/Images/LogoProfile/1.png")}
          />
        </div>

        <h1 className="text-2xl md:text-3xl text-center text-[#00ff99] mb-1 whitespace-nowrap overflow-hidden border-r-2 border-[#00ff99] animate-typing">
          Hi, I'm Angky Kurniawan
        </h1>

        <p className="text-center italic text-[#66ffcc] mb-8 animate-fadeIn">
          Web 3, Network & Cloud Enthusiast
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fadeIn">
          {["Blockchain.png", "Winbox.png", "Cisco.svg", "Linux.png", "Programming.png"].map((src, i) => (
            <img
              key={i}
              src={`/Images/Interests/${src}`}
              alt={src.split(".")[0]}
              className="w-10 h-10 border-2 border-[#00ff99] rounded-full hover:scale-110 transition-transform"
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-[#00ff99] text-lg border-b border-[#00ff99] pb-1 mb-3 animate-fadeInUp">
              💡 Checking Connection...
            </h2>
            <div
              className="bg-[#111c17] p-4 rounded-lg font-mono text-sm shadow-[0_0_15px_rgba(0,255,153,0.25)] animate-fadeIn"
              dangerouslySetInnerHTML={{ __html: typedCode }}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[#00ff99] text-lg border-b border-[#00ff99] pb-1 mb-3 animate-fadeInUp">
              🔗 Links
            </h2>
            <div className="flex flex-col gap-5">
              {["mailto:angkykurniawan03@gmail.com", "https://github.com/angkykurniawan", "https://www.instagram.com/angkyk05?igsh=MzM1a3gxczhvdjRi", "http://www.youtube.com/@Angkyk05", "https://linktr.ee/angkykurniawan"].map((url, idx) => (
                <a
                  key={idx}
                  href={url.includes("mailto") ? url : url.startsWith("http") ? url : `mailto:${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-[#11241d] hover:bg-[#0f2d22] text-[#00ff99] font-bold p-3 rounded-lg shadow-[0_0_10px_rgba(0,255,153,0.15)] transition-transform duration-300 transform hover:scale-105"
                >
                  {url.includes("mailto") ? "📧 Email Me" : url.includes("github") ? "💻 GitHub" : url.includes("instagram") ? "📸 Instagram" : url.includes("youtube") ? "📺 Youtube" : "🔗 Other Links"}
                </a>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-[#00ff99] text-lg border-b border-[#00ff99] pb-1 mt-10"> 🖼️ Project</h2>
        {gallerySections.map((section) => {
          const scrollRef = useRef(null);
          const scroll = (direction) => {
            if (scrollRef.current) {
              const { scrollLeft, clientWidth } = scrollRef.current;
              scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
                behavior: "smooth"
              });
            }
          };
          return (
            <div key={section.title} className="mb-8">
              <h3 className="text-center text-[#66ffcc] mt-4 mb-2">{section.title}</h3>
              <div className="relative">
                <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0f2d22] hover:bg-[#11241d] text-[#00ff99] px-2 py-1 rounded-full shadow-md"> ◀ </button>
                <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0f2d22] hover:bg-[#11241d] text-[#00ff99] px-2 py-1 rounded-full shadow-md"> ▶ </button>
                <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth px-6 scrollbar-hide" onWheel={(e) => scrollRef.current && (scrollRef.current.scrollLeft += e.deltaY)} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                  {Array.from({ length: section.count }).map((_, i) => (
                    <img
                      key={i}
                      src={`./Images/${section.folder}/${i + 1}.png`}
                      alt={`${section.folder} Picture ${i + 1}`}
                      onClick={() => setModalSrc(`./Images/${section.folder}/${i + 1}.png`)}
                      className="w-40 md:w-48 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <h2 className="text-[#00ff99] text-lg border-b border-[#00ff99] pb-1 mt-10"> 🎟️ Events & Participations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {eventLinks.map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="text-center bg-[#11241d] hover:bg-[#0f2d22] text-[#00ff99] font-bold p-3 rounded-lg shadow-[0_0_10px_rgba(0,255,153,0.15)] transition-transform duration-300 transform hover:scale-105">
              {label}
            </a>
          ))}
        </div>

        <h2 className="text-[#00ff99] text-lg border-b border-[#00ff99] pb-1 mt-10">🚹 Design Portfolio</h2>
        {designSections.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="text-center text-[#66ffcc] mt-4 mb-2">{section.title}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {section.files.map((file, i) => (
                <img
                  key={i}
                  src={`./Images/${section.folder}/${file}`}
                  alt={`${section.title} ${i + 1}`}
                  onClick={() => setModalSrc(`./Images/${section.folder}/${file}`)}
                  className="w-40 md:w-48 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        ))}

        {modalSrc && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <span className="absolute top-8 right-10 text-white text-4xl font-bold cursor-pointer" onClick={() => setModalSrc("")}> &times; </span>
            <img src={modalSrc} alt="Preview" className="max-w-[80%] max-h-[80%] animate-zoom" />
          </div>
        )}

        <footer className="text-center text-sm text-[#55ffbb] mt-12 pt-6 border-t border-[#003322] animate-fadeIn">
          &copy; 2025 Angky Kurniawan. All Rights reserved.
        </footer>
      </div>
    </div>
  );
}
