import React from 'react';
import Header from '../../components/Header';
import { Container, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {StatsContainer} from './styles';

import ShortenerService from '../../services/shortenerService';

class RedirectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortenerService();
            let { url } = await service.getLink(code);

            if (!url.startsWith('http')) {
                url = 'http://' + url;
            }
                
            window.location = url;
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a url solicitada não existe!' });
        }
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <Container>
                {errorMessage ? (
                    <>
                        <Header />
                        <StatsContainer className="text-center">
                            <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                            <p className="m-3">{errorMessage}</p>
                            <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                        </StatsContainer>
                    </>
                ) : (
                    <Spinner className="text-center" animation="border" />
                ) }
                
            </Container>
        )
    }
}

export default RedirectPage;