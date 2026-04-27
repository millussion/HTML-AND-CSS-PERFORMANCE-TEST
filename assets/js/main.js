const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// sidebar//
function showSidebar() {
    const sidebar = document.querySelector(".sidebar-nav");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar-nav");
    sidebar.style.display = "none";
}