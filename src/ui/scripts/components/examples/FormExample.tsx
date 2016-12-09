import * as React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    TextArea,
    Select,
    SelectOption,
    Checkbox,
    Radio,
    FormActions,
    Button
} from '../photon';

const FormExample = () => (
    <Form className="padded-more">
        <FormGroup>
            <Label>Email address</Label>
            <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
            <Label>Description</Label>
            <TextArea rows={3} />
        </FormGroup>
        <Select>
            <SelectOption>Option one</SelectOption>
            <SelectOption>Option two</SelectOption>
            <SelectOption>Option three</SelectOption>
            <SelectOption>Option four</SelectOption>
            <SelectOption>Option five</SelectOption>
        </Select>
        <Checkbox>
            This is a checkbox
        </Checkbox>
        <Checkbox>
            This is a checkbox too
        </Checkbox>
        <Radio name="radios" defaultChecked>
            Keep your options open
        </Radio>
        <Radio name="radios">
            Be sure to remember to check for unknown unknowns
        </Radio>
        <FormActions>
            <Button type="submit" withinForm>Cancel</Button>
            <Button type="submit" withinForm>OK</Button>
        </FormActions>
    </Form>
);

export default FormExample;
