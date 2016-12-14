const React = require('react')
const { Button, FormGroup, ControlLabel, FormControl } = require('react-bootstrap')
const { Link } = require('react-router')

		function FieldGroup({ id, label, ...props }) {
			return (
				<FormGroup controlId={id} >
					<ControlLabel>{label}</ControlLabel>
					<FormControl {...props} />
				</FormGroup>
			);
		}

		const FormInstance = ({data, submit, change}) => (
			<form onSubmit={submit}>
				<FieldGroup
					id="appear"
					type="text"
					label="First Look"
					value={data.appear}
					onChange={change('appear')}
				/>
				<FieldGroup
					id="temp"
					type="text"
					label="Temperature"
					value={data.temp}
					onChange={change('temp')}
				/>
				<FieldGroup
					id="pulse"
					type="text"
					label="Pulse"
					value={data.pulse}
					onChange={change('pulse')}
				/>
				<FieldGroup
					id="respiration"
					type="text"
					label="Respiration"
					value={data.respiration}
					onChange={change('respiration')}
				/>
				<FieldGroup
					id="weight"
					type="text"
					label="Weight"
					maxLength="4"
					value={data.weight}
					onChange={change('weight')}
				/>
				<FieldGroup
					id="chest"
					type="text"
					label="Heart/Lungs"
					value={data.chest}
					onChange={change('chest')}
				/>
				<FieldGroup
					id="notes"
					type="text"
					label="Notes"
					value={data.notes}
					onChange={change('notes')}
				/>
				<Button type="submit">
					Submit
				</Button>
				<Link to={`/pets/${data.pet_id}/show`} className="ml2">Cancel</Link>
			</form>
		)

module.exports = FormInstance
