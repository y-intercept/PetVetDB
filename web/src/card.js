const React = require('react')

const Card = exam => {
  <div className="fl w-70 h-75 pa2 mt3 dib ml7 bl b--mid-gray">
    <div className="fl w-50 h-40 pa2">
      <div className=>
        <div className="f3 fw4 bb b--mid-gray fl">Name</div>
				<div className="fr ba b--mid-gray pb1">PIC</div>
        <div className="f5 fw2 i">Owner: ...</div>
        <table className="mt3">
					<tbody>
						<tr>
							<td className="w4 pt1">Temp: </td>
							<td className="w4 pt1">{this.state.exam.temp}</td>
						</tr>
						<tr>
							<td className="w4 pt1">Weight: </td>
							<td className="w4 pt1">{this.state.exam.weight}</td>
						</tr>
						<tr>
							<td className="w4 pt1">Pulse: </td>
							<td className="w4 pt1">{this.state.exam.pulse}</td>
						</tr>
						<tr>
							<td className="w4 pt1">Breath: </td>
							<td className="w4 pt1">{this.state.exam.breath}</td>
						</tr>
						<tr>
							<td className="w4 pt1">Respiration: </td>
							<td className="w4 pt1">{this.state.exam.respiration}</td>
						</tr>
						<tr>
							<td className="w4 pt1">Heart/Lungs: </td>
							<td className="w4 pt1">{this.state.exam.chest}</td>
						</tr>
					</tbody>
				</table>
				<div className="w-50 pv3">{this.state.exam.notes}</div>
      </div>
    </div>
    <div className="w-10 h-75 pa2"></div>
}
