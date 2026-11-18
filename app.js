// Function to display toast notifications
function showToast(message) {
    let toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "green";
    toast.style.color = "white";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "16px";

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}

// Smooth scrolling to booking form
document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(
        'a[href="#booking"], a[href="booking.html"]'
    );

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {

            if (button.getAttribute("href") === "#booking") {
                const bookingSection = document.querySelector("#booking");

                if (bookingSection) {
                    event.preventDefault();

                    bookingSection.scrollIntoView({
                        behavior: "smooth"
                    });

                    showToast("Redirecting to booking section!");
                }
            } else {
                showToast("Opening IPL Ticket Booking Form!");
            }

        });
    });

});