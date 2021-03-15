import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

type AppPropsType = {
    // value: RatingValueType
    // onClick: (value: RatingValueType) => void
}

function App(props: AppPropsType) {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className="App">
            <div>
                <OnOff/>

                <PageTitle title={"This is App component"}/>
                <PageTitle title={"My Friends"}/>
                <h3>Un controlled</h3>

                <UnControlledRating />

                <UnControlledAccordion title={'Menu'}/>
                <UnControlledAccordion title={'Users'}/>

                <hr/>
                <h3>Controlled</h3>

                <Accordion title={"Menu"} collapsed={true}/>
                <Accordion title={"Users"} collapsed={false}/>

                <Rating
                    value={ratingValue}
                    onClick={setRatingValue} />

            </div>

        </div>
    );
}

type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    return (
        <div><h1>{props.title}</h1></div>
    )
}

export default App;
