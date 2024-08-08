import Header from "./Header";
import {render} from '@testing-library/react-native'

describe('<Header/>', () => {
    it('should render Tagarela and the page name', () => {
        const {getByText} = render(<Header page_name="test"/>)

        expect(getByText('test')).toBeVisible()
        expect(getByText('TAGARELA')).toBeVisible()
    })
})