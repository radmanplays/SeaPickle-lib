import { loadJQuery } from "./jqueryloader";
import { addgui,guihtml,guiname,guistyles,guionlyshowifingame,guikeybind,setguihtml,setguiname,setguistyles,setguionlyshowifingame,setguikeybind } from "./addgui";
let mainguiname:string = null
let mainguihtml:string = null
let mainguistyles:string = null
let mainguikeybind:string = null
let mainguionlyshowifingame:boolean = false
function mainaddgui(){
    setguiname(mainguiname)
    setguihtml(mainguihtml)
    setguistyles(mainguistyles)
    setguikeybind(mainguikeybind)
    setguionlyshowifingame(mainguionlyshowifingame)
    addgui()
}
class SeaPicklelib {
    version: string;
  
    constructor() {
      this.version = "1.0";
    }
  
    loadjquery() {
      loadJQuery()
    }
  
    gui = {
      setGuiName: (name: string) => {
        mainguiname = name
      },
      setGuiHtml: (html: string) => {
        mainguihtml = html
      },
      setGuiStyles: (styles: string) => {
        mainguistyles = styles
      },
      setGuiKeyBind: (keybind: string) => {
        mainguikeybind = keybind
      },
      setGuiOnlyShowIfInGame: (idk: boolean) => {
        mainguionlyshowifingame = idk
      },
      addGui: () => {
        addgui()
      },
    };
  }
  
  const seapicklelib = new SeaPicklelib();
  export { SeaPicklelib };
