import { Component } from 'react';
import * as React from 'react';
import Options from './options/Options';
import { Auth } from 'aws-amplify';

export default class Dashboard extends Component {

    state: {
        options: string[],
        userName: string,
        optionDivElements?: any[]
    };

    constructor(props: any) {
        super(props);
        this.state = {
            userName: '',
            options: ['Documents', 'Video', 'Audio', 'Images'],
            optionDivElements: []
        };

    }

    async componentDidMount() {
        this.setState({
            userName: await Auth.currentAuthenticatedUser().then(data => {
                return data.username;
            }),
            optionDivElements: this.buildOptionsSection()
        });
    }

    buildOptionsSection() {
        let divs: any[] = [];
        this.state.options.forEach(option => {
            divs.push(<Options key={option} option={option}/>);
        });
        return divs;
    }

    render() {
        return (
            <div>
                <div> Welcome Back, {this.state.userName}</div>
                <table>
                    <tbody>
                    <tr>{this.state.optionDivElements}</tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
