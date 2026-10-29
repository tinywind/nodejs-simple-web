import React from "react";
import PropsValidation from "../component/PropsValidation";

class PropsValidationPage extends React.Component {
    render() {
        return (
            <div>
                <PropsValidation title={this.props.pageTitle} body={this.props.pageBody}/>
            </div>
        );
    }
}

PropsValidationPage.defaultProps = {
    pageTitle: 'Default Title',
    pageBody: 'Default Body'
};

export default PropsValidationPage;