import React from "react";
import '../res/css/styles.css'
import SearchBox from "../component/SearchBox";
import Weather from "../component/Weather";


class MainPage extends React.Component {
    constructor(props: {}) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        return (
            <>
                <div className="main">
                    <SearchBox/>
                    <Weather/>
                </div>
            </>
        )
    }
}

export default MainPage