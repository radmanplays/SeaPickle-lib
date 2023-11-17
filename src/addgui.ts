export let guiname:string = null
export let guihtml:string = null
export let guistyles:string = null
export let guikeybind:string = null
export let guionlyshowifingame:boolean = false
export function setguiname(name:string){
    guiname = name
}
export function setguihtml(html:string){
    guihtml = html
}
export function setguistyles(styles:string){
    guistyles = styles
}
export function setguikeybind(keybind:string){
    guikeybind = keybind
}
export function setguionlyshowifingame(idk:boolean){
    guionlyshowifingame = idk
}
export function addgui() {
    if (guiname == null || guihtml == null || guistyles == null){
        alert("failed to add gui. reason : guiname or guihtml or guistyles are not defined");
        return;
    }
    var guiVisible = false; // Variable to keep track of the visibility of the GUI

    function toggleGui() { // Function to toggle the GUI visibility
        if (guiVisible) { // If the GUI is visible
            hideGui(); // Hide the GUI
        } else {
            showGui(); // Otherwise, show the GUI
        }
      }
      function showGui() { // Function to show the GUI
        hideGui(); // If the GUI is already open, this will hide it.
        
        var gui = document.createElement("gui"); // Create a new "gui" element
        if (guionlyshowifingame==true && document.pointerLockElement != null) {
            gui.innerHTML = guihtml; // Set the HTML content of the "gui" element
            gui.id = guiname; // Set the ID of the "gui" element to "myGui"
            //@ts-ignore
            gui.style = guistyles
            document.body.appendChild(gui); // Append the "gui" element to the body of the document
            guiVisible = true; // Set the GUI visibility to true
        }else {
            if (document.pointerLockElement != null) {
            document.exitPointerLock()
            }
            gui.innerHTML = guihtml; // Set the HTML content of the "gui" element
            gui.id = guiname; // Set the ID of the "gui" element to "myGui"
            //@ts-ignore
            gui.style = guistyles
            document.body.appendChild(gui); // Append the "gui" element to the body of the document
            guiVisible = true; // Set the GUI visibility to true
        }  
    }
    function hideGui() { // Function to hide the GUI
        if (document.getElementById(guiname)) { // If the "myGui" element exists
            document.getElementById(guiname).remove(); // Remove the "myGui" element from the document
        }
        guiVisible = false; // Set the GUI visibility to false
        
    }
    window.addEventListener("keydown", (event) => { // Event listener for keydown events
        if (guikeybind == "RightShift" && event.key === "Shift" && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) { // If the right Shift key is pressed
            toggleGui(); // Toggle the GUI visibility
        }
        
        if (event.key === "Escape" || event.key === "`") { // If the Escape key or backtick is pressed
          hideGui(); // Hide the GUI
        }
        if (event.key === guikeybind) { // If the right Shift key is pressed
            toggleGui(); // Toggle the GUI visibility
        }
    })
}