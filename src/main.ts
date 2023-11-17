import { loadjquery } from "./jqueryloader";
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
const SeaPicklelib = {
    version: "1.0",
    loadjquery: loadjquery(),
    gui: {
        setguiname: mainguiname,
        setguihtml: mainguihtml,
        setguistyles: mainguistyles,
        setguikeybind: mainguikeybind,
        setguionlyshowifingame: mainguionlyshowifingame, 
        addgui: mainaddgui()
    }
}
