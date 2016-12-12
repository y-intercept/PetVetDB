const React = require('react')
const { Button, FormGroup, ControlLabel, FormControl } = require('react-bootstrap')



function FieldGroup({ id, label, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
		</FormGroup>
	);
}

const FormInstance = ({data, submit, change}) => (
	<form onSubmit={submit}>
		<FieldGroup
			id="name"
			label="Name"
			type="text"
			value={data.name}
			onChange={change('name')}
		/>
		<FieldGroup
			id="species"
			label="Species"
			type="text"
			value={data.species}
			onChange={change('species')}
		/>
		<FieldGroup
			id="breed"
			label="Breed"
			type="text"
			value={data.breed}
			onChange={change('breed')}
		/>
		<FieldGroup
			id="color"
			label="Color"
			type="text"
			value={data.color}
			onChange={change('color')}
		/>
		<FieldGroup
			id="markings"
			label="Markings"
			type="text"
			value={data.markings}
			onChange={change('markings')}
		/>
		<FieldGroup
			id="sex"
			label="Sex"
			type="text"
			value={data.sex}
			onChange={change('sex')}
		/>
		<FieldGroup
			id="DOB"
			label="DOB"
			type="text"
			value={data.dob}
			onChange={change('dob')}
		/>

		<Button type="submit">
			Submit
		</Button>
	</form>
)

module.exports = FormInstance
