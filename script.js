function updateVisitCount() {
    let visits = localStorage.getItem("visitCount") || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem("visitCount", visits);
    document.getElementById("visitCount").innerText = visits;
}
updateVisitCount();
showFeedbackPopup();