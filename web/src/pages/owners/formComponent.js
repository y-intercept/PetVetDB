const React = require('react')
const { Button, FormGroup, ControlLabel, FormControl } = require('react-bootstrap')

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
					id="firstName"
					type="text"
					label="First Name"
					value={data.firstName}
					onChange={change('firstName')}
				/>
				<FieldGroup
					id="lastName"
					type="text"
					label="Last Name"
					value={data.lastName}
					onChange={change('lastName')}
				/>
				<FieldGroup
					id="address"
					type="text"
					label="Address"
					value={data.address}
					onChange={change('address')}
				/>
				<FieldGroup
					id="city"
					type="text"
					label="City"
					value={data.city}
					onChange={change('city')}
				/>
				<FieldGroup
					id="state"
					type="text"
					label="State"
					maxLength="2"
					value={data.state}
					onChange={change('state')}
				/>
				<FieldGroup
					id="zip"
					type="text"
					maxLength="5"
					label="Zip Code"
					value={data.zip}
					onChange={change('zip')}
				/>
				<FieldGroup
					id="email"
					type="email"
					label="Email Address"
					value={data.email}
					onChange={change('email')}
				/>
				<FieldGroup
					id="phone"
					type="text"
					label="Phone Number"
					maxLength="12"
					value={data.phone}
					onChange={change('phone')}
				/>
				<Button type="submit">
					Submit
				</Button>
			</form>
		)

module.exports = FormInstance
