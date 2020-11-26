import React from 'react';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import Header from '../../components/Header';
import { StatsBox, StatsBoxTitle, StatsContainer, StatsRow } from './styles';
import ShortenerService from '../../services/shortenerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

class StatsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            shortenerURL: {},
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortenerService();
            const shortenerURL = await service.getStats(code);

            const parsedDate = parseISO(shortenerURL.updatedAt);
            const currentDate = new Date();
            const relativeDate = formatRelative(parsedDate, currentDate, {
                locale: ptBR,
            });
            shortenerURL.relativeDate = relativeDate;

            this.setState({ isLoading: false, shortenerURL });
        } catch (error) {
            this.setState({ isLoading: false, errorMessage : 'Ops, a url solicitada não existe!' });
        }
    }

    render() {
        const { errorMessage, shortenerURL } = this.state;
        return (
            <Container>
                <Header>Estatísticas:</Header>
                {errorMessage ? (
                    <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <p><b>https://pitu.tk/{shortenerURL.code}</b></p>
                        <p>Redireciona para: <br/>{shortenerURL.url}</p>
                        <StatsRow>
                            <StatsBox>
                                <b>{shortenerURL.hits}</b>
                                <StatsBoxTitle>Visitas</StatsBoxTitle>
                            </StatsBox>
                            <StatsBox>
                                <b>{shortenerURL.relativeDate}</b>
                                <StatsBoxTitle>Última Visita</StatsBoxTitle>
                            </StatsBox>
                        </StatsRow>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>
                )}
            </Container>
        )
    }
}

export default StatsPage;