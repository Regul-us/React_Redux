import React, {useState} from 'react';
import './App.css';
<<<<<<< HEAD
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
=======
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
>>>>>>> 5cbc54d (branch)

type AppPropsType = {

}

function App(props: AppPropsType) {
<<<<<<< HEAD
    return (
        <div className="App">
=======
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [unSwitchOn, setUnSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">
            <div>
                <OnOff on={switchOn} onChange={setSwitchOn}/>

                <PageTitle title={"This is App component"}/>
                <PageTitle title={"My Friends"}/>

                <hr/><h3>Un controlled</h3><hr/>
                <UnControlledOnOff onChange={setUnSwitchOn}/>

                {/*<UnControlledRating />*/}

                <UnControlledAccordion title={'Menu'}/>
                <UnControlledAccordion title={'Users'}/>

                <hr/><h3>Controlled</h3><hr/>


                <Rating
                    value={ratingValue}
                    onClick={setRatingValue} />

            </div>
        </div>
    );
}


function PageTitle(props: PagePropsType) {
    return (
        <div><h1>{props.title}</h1></div>
    )
}

export default App;
