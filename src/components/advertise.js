import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/advertise.css';

const Advertise = () => {
    return (
        <div className="advertise">
            <div className="background">
            <h1>Advertise with Us</h1>
            <div className="contact-button">
                <Link to="/contact">
                    Contact
                </Link>
            </div>
            <div className="ad-content">
                <h2 className="ad-headers">If you’re going to advertise (and you should), it makes sense to spend your advertising money where you get the most results… Radio!</h2>

                <h3 className="ad-headers">Here are ten reasons why radio is your best choice (courtesy of the Radio Advertising Bureau):</h3>
                <ol>
                    <li> 
                        <h4 className="ad-headers">Radio sells with immediacy.</h4>

                        <p>Research proves that radio regularly reaches consumers <b>within two hours of their largest purchase of the day.</b> Can there be a better time to reach customers than on their car radio while they are driving to do today’s shopping?</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Radio sells everywhere.</h4>

                        <p>Radio is the only true mobile medium. In the car, at work, and at play, radio is there…the companion and the advertising force your customers take with them wherever they go.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Radio sells with intimacy.</h4>

                        <p>In your personal life, when you have something very important to communicate to someone, which would you prefer – to show them a picture, to write to them, or to talk with the intimacy and emotion of the human voice? Radio sells with intimacy.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Radio stars in the theater of the mind.</h4>

                        <p>Want a 100-piece symphony orchestra in your ad, an elephant, a chorus, a laughing child, a love song? With word pictures and emotion-evoking sounds, radio’s theatre of the mind stimulates the most emotion-filled pictures the mind can comprehend.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Radio escapes advertising’s clutter.</h4>

                        <p>Today’s newspapers average 2/3 ad copy to 1/3 editorial copy. TV spends about 1/3 of its time on advertising. Today’s radio, at about 10 minutes of advertising per hour, devotes less than 1/5 of its time to ads. Radio is the uncluttered medium.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Radio is the cost effective medium.</h4>

                        <p>Newspaper rates are up (even though circulation is down). TV ad rates are up (even though viewership is down). Radio advertising costs grew less than any other major form of advertising.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Frequency sells.</h4>

                        <p>Psychologists tell us that consumers need to be exposed to an advertising message at least three times before it begins to penetrate. Most local businesses cannot afford the necessary three-times-plus frequency that effective advertising demands – except on radio. Radio is the reach and frequency medium you can afford.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Radio’s targeted advertising sells.</h4>

                        <p>Radio’s variety of formats allows you to pinpoint your advertising on the station or stations that best match your customer’s interests. You cannot pinpoint advertising in the broad-reach, scattershot newspaper and TV media forms. Radio’s unique targeting ability saves you money.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">You’re always on the front page with radio.</h4>

                        <p>With radio advertising you are front and center in the listener’s attention span when your ad is on the air. You’re never buried on page 42 and you’re never surrounded by your competitor’s ads. With radio, you are always on the front page.</p>
                    </li>
                    <li>
                        <h4 className="ad-headers">Radio is an active medium in an active society.</h4>

                        <p>Passive forms of advertising simply list merchandise or tell you where a product is available. Radio is an active medium capable of stirring emotion, creating demand, and selling your product or service. Today’s hotly competitive marketplace demands an active medium. That’s radio!</p>
                    </li>
                </ol>
                </div>
                <div className="contact-button">
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Advertise;