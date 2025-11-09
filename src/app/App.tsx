import MainPage from '@/src/pages/MainPage';
type Settings = {
    cardsCount: number;
}


const App: React.FC<Settings> = ({ cardsCount }: Settings) => <MainPage cardsCount={ cardsCount } />;

export default App;
