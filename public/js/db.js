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
                        <svg class="calendarIcon" xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                            <path d="M6.89418 9.87075H4.9177V11.8472H6.89418V9.87075ZM10.8472 9.87075H8.87067V11.8472H10.8472V9.87075ZM14.8001 9.87075H12.8236V11.8472H14.8001V9.87075ZM16.7766 2.95305H15.7884V0.976562H13.8119V2.95305H5.90594V0.976562H3.92945V2.95305H2.94121C1.84426 2.95305 0.974604 3.84247 0.974604 4.92954L0.964722 18.7649C0.964722 19.852 1.84426 20.7414 2.94121 20.7414H16.7766C17.8637 20.7414 18.7531 19.852 18.7531 18.7649V4.92954C18.7531 3.84247 17.8637 2.95305 16.7766 2.95305ZM16.7766 18.7649H2.94121V7.89427H16.7766V18.7649Z" fill="#689946"/>
                        </svg>
                        ${event.Date}
                    </label>
                    <label for="">
                        <svg class="locationIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z" fill="#689946"/>
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