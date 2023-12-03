const eventsDiv = document.querySelector(".Events");
console.log("hi");


// getting the products
class Events {
    async getEvents(){
        try {
            let result = await fetch('events.json');
            let data = await result.json();
            let events = data.events;
            events = events.map(event => {
                const {channelImage, channel, Title, Poster, Date, location, Views} = event;
                return {channelImage, channel, Title, Poster, Date, location, Views};
            });
         
            return events;
        } catch (error) {
            console.log(error);
        }
    }
}
// display events
class UI {
    displayEvents(events){
        let result = '';
        events.forEach(event => {
            result += `
            <div class="Event"> 
                <div class="Channel">
                    <img src=${event.channelImage} alt="" class="ChannelImage">
                    <h2 class="channelName">${event.channel}</h2>
                </div>
                <div class="descrption"><p>${event.Title}</p></div>
                <img src=${event.Poster} alt="" class="Poster">
                <div class="details">
                    <label for="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.89418 10.8708H6.9177V12.8472H8.89418V10.8708ZM12.8472 10.8708H10.8707V12.8472H12.8472V10.8708ZM16.8001 10.8708H14.8236V12.8472H16.8001V10.8708ZM18.7766 3.95305H17.7884V1.97656H15.8119V3.95305H7.90594V1.97656H5.92945V3.95305H4.94121C3.84426 3.95305 2.9746 4.84247 2.9746 5.92954L2.96472 19.7649C2.96472 20.852 3.84426 21.7414 4.94121 21.7414H18.7766C19.8637 21.7414 20.7531 20.852 20.7531 19.7649V5.92954C20.7531 4.84247 19.8637 3.95305 18.7766 3.95305ZM18.7766 19.7649H4.94121V8.89427H18.7766V19.7649Z" fill="#3A881E"/>
                          </svg>
                        ${event.Date}
                    </label>
                    <label for="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z" fill="#3A881E"/>
                          </svg>
                          ${event.location}
                    </label>
                    <label for="">Views: ${event.Views}</label>

                </div>
            </div>`;
        });
        eventsDiv.innerHTML = result;
    }
}

// local storage
class Storage {

}

document.addEventListener("DOMContentLoaded", ()=> {
    const ui = new UI();
    const events = new Events();
    // get all events
    events.getEvents().then(events => ui.displayEvents(events) );
})