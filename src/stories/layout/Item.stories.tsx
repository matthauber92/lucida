import { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Item } from '../../components/layout';

const meta: Meta<typeof Item> = {
  title: 'Components/layout/GridLayout',
  component: Item,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Item>;


export const GridLayout: Story = {
  render: () => (
    <Container sx={{ bg: 'lightgrey', p: 3 }}>
      <Row spacing={2} rowSpacing={2} sx={{ border: '1px solid black' }}>
        <Item xs={12} sm={6} md={4} lg={3} sx={{ bg: 'lightblue', p: 2, ml: 2, mt: 2 }}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 1</div>
        </Item>
        <Item xs={12} sm={6} md={4} lg={3} sx={{ bg: 'lightgreen', p: 2, ml: 2, mt: 2 }}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 2</div>
        </Item>
        <Item xs={12} sm={6} md={4} lg={3} sx={{ bg: 'lightcoral', p: 2, ml: 2, mt: 2 }}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 3</div>
        </Item>
        <Item xs={12} sm={6} md={4} lg={3} sx={{ bg: 'lightyellow', p: 2, ml: 2, mt: 2 }}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 4</div>
        </Item>
      </Row>
    </Container>
  ),
};
