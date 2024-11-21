import { MouseEvent } from 'react'

interface Props {
	onStopClick: (stopName: string) => void
}

export default function Stops({ onStopClick }: Props) {

	const handleClick = (e: MouseEvent<SVGElement>) => {
		let el = e.target as Element
		let parent = el.parentElement as Element

		while (parent.id !== 'STOPS') {
			el = parent
			parent = parent.parentElement as Element
		}

		onStopClick(el.id)
	}

	return (
		<g
			onClick={handleClick}
			xmlns='http://www.w3.org/2000/svg'
			id='STOPS'
			style={{ cursor: 'pointer', fontFamily: 'Inter', fontWeight: 500, fontSize: 5.47612, color: '#282828' }}
		>
			<g id='Tegs Centralskola'>
				<text transform='translate(438.936 517.493)' fill='#282828'  ><tspan x='0' y='5.49132'>Tegs Centralskola</tspan></text>
				<circle id='Ellipse 124' cx='434.829' cy='521.6' r='1.36903' fill='white' />
			</g>
			<g id='Ishallen'>
				<text transform='translate(438.936 544.874)' fill='#282828'  ><tspan x='0' y='5.49132'>Ishallen</tspan></text>
				<circle id='Ellipse 125' cx='434.829' cy='548.981' r='1.36903' fill='white' />
			</g>
			<g id='Marknadsgatan'>
				<text transform='translate(462.209 583.207)' fill='#282828'  ><tspan x='0.137653' y='5.49132'>Marknadsgatan</tspan></text>
				<circle id='Ellipse 126' cx='511.494' cy='587.314' r='1.36903' fill='white' />
			</g>
			<g id='Söderslatts Handelsområde'>
				<text id='Söderslätts handelsområde' transform='translate(444.412 596.897)' fill='#282828'  ><tspan x='0.0029068' y='5.49132'>Söderslätts handelsområde</tspan></text>
				<circle id='Ellipse 127' cx='525.185' cy='601.004' r='1.36903' fill='white' />
			</g>
			<g id='Tegs C'>
				<text transform='translate(489.59 531.046) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Tegs C</tspan></text>
				<circle id='Ellipse 111' cx='503.28' cy='506.541' r='1.36903' fill='white' />
				<circle id='Ellipse 110' cx='503.28' cy='513.386' r='1.36903' fill='white' />
			</g>
			<g id='Bryggargatan'>
				<text transform='translate(396.496 544.032) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Bryggargatan</tspan></text>
				<circle id='Ellipse 112' cx='421.139' cy='513.386' r='1.36903' fill='white' />
			</g>
			<g id='Svedjebacken'>
				<text transform='translate(367.746 544.032) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Svedjebacken</tspan></text>
				<circle id='Ellipse 113' cx='393.758' cy='513.386' r='1.36903' fill='white' />
			</g>
			<g id='Laxgränd'>
				<text transform='translate(348.58 536.287) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Laxgränd</tspan></text>
				<circle id='Ellipse 114' cx='366.378' cy='513.386' r='1.36903' fill='white' />
			</g>
			<g id='Umeliivägen'>
				<text transform='translate(314.684 542.802) rotate(-45)' fill='#282828'  ><tspan x='0.817093' y='5.49132'>Umeliivägen</tspan></text>
				<circle id='Ellipse 115' cx='338.996' cy='513.386' r='1.36903' fill='white' />
			</g>
			<g id='Mineralvägen'>
				<text transform='translate(823.633 509.806) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Mineralvägen</tspan></text>
				<circle id='Ellipse 100' cx='848.275' cy='480.53' r='1.36903' fill='white' />
			</g>
			<g id='Älvans väg'>
				<text transform='translate(848.938 507.042) rotate(-45)' fill='#282828'  ><tspan x='0.496361' y='5.49132'>Älvans väg</tspan></text>
				<circle id='Ellipse 101' cx='870.18' cy='480.53' r='1.36903' fill='white' />
			</g>
			<g id='Nornaplatsen'>
				<text transform='translate(870.842 510.513) rotate(-45)' fill='#282828'  ><tspan x='0.843727' y='5.49132'>Nornaplatsen</tspan></text>
				<circle id='Ellipse 102' cx='896.191' cy='480.53' r='1.36903' fill='white' />
			</g>
			<g id='Tomteboplatsen'>
				<text transform='translate(894.823 515.614) rotate(-45)' fill='#282828'  ><tspan x='0.50658' y='5.49132'>Tomteboplatsen</tspan></text>
				<circle id='Ellipse 103' cx='926.31' cy='480.53' r='1.36903' fill='white' />
			</g>
			<g id='Kallplatsen'>
				<text id='Källplatsen' transform='translate(929.756 505.227) rotate(-45)' fill='#282828'  ><tspan x='0.245014' y='5.49132'>Källplatsen</tspan></text>
				<circle id='Ellipse 104' cx='949.584' cy='480.53' r='1.36903' fill='white' />
			</g>
			<g id='Lyktvägen'>
				<text transform='translate(950.953 503.998) rotate(-45)' fill='#282828'  ><tspan x='0.0953445' y='5.49132'>Lyktvägen</tspan></text>
				<circle id='Ellipse 105' cx='970.12' cy='480.53' r='1.36903' fill='white' />
			</g>
			<g id='Mattgränd'>
				<text id='Måttgränd' transform='translate(536.138 54.7612)' fill='#282828'  ><tspan x='0' y='5.49132'>Måttgränd</tspan></text>
				<circle id='Ellipse 164' cx='530.661' cy='58.8683' r='1.36903' fill='white' />
			</g>
			<g id='Ersforsen S'>
				<text transform='translate(536.138 47.916)' fill='#282828'  ><tspan x='0' y='5.49132'>Ersforsen S</tspan></text>
				<circle id='Ellipse 165' cx='530.661' cy='52.0231' r='1.36903' fill='white' />
			</g>
			<g id='Ersforsen N'>
				<text transform='translate(536.138 41.0708)' fill='#282828'  ><tspan x='0' y='5.49132'>Ersforsen N</tspan></text>
				<circle id='Ellipse 166' cx='530.661' cy='45.1779' r='1.36903' fill='white' />
			</g>
			<g id='Bron'>
				<text transform='translate(536.138 34.2256)' fill='#282828'  ><tspan x='0' y='5.49132'>Bron</tspan></text>
				<circle id='Ellipse 167' cx='530.661' cy='38.3327' r='1.36903' fill='white' />
			</g>
			<g id='Garsjöbacksvägen'>
				<text id='Gärsjöbäcksvägen' transform='translate(536.138 27.3806)' fill='#282828'  ><tspan x='0' y='5.49132'>Gärsjöbäcksvägen</tspan></text>
				<circle id='Ellipse 168' cx='530.661' cy='31.4877' r='1.36903' fill='white' />
			</g>
			<g id='Skymningsvägen'>
				<text transform='translate(536.138 20.5354)' fill='#282828'  ><tspan x='0' y='5.49132'>Skymningsvägen</tspan></text>
				<circle id='Ellipse 169' cx='530.661' cy='24.6425' r='1.36903' fill='white' />
			</g>
			<g id='Onsdagsvägen'>
				<text transform='translate(536.138 13.6902)' fill='#282828'  ><tspan x='0' y='5.49132'>Onsdagsvägen</tspan></text>
				<circle id='Ellipse 170' cx='530.661' cy='17.7973' r='1.36903' fill='white' />
			</g>
			<g id='Aftonvägen'>
				<text transform='translate(536.138 6.84497)' fill='#282828'  ><tspan x='0' y='5.49132'>Aftonvägen</tspan></text>
				<circle id='Ellipse 171' cx='530.661' cy='10.9521' r='1.36903' fill='white' />
			</g>
			<g id='Ersmark'>
				<text transform='translate(536.138)' fill='#282828'  ><tspan x='0' y='5.49132'>Ersmark</tspan></text>
				<circle id='Ellipse 172' cx='530.661' cy='4.1071' r='1.36903' fill='white' />
			</g>
			<g id='ängesvägen'>
				<circle id='Ellipse 5' cx='411.556' cy='388.805' r='1.36903' fill='white' />
				<text transform='translate(385.544 417.68) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Ängesvägen</tspan></text>
			</g>
			<g id='Stadsgransvägen'>
				<circle id='Ellipse 6' cx='380.067' cy='388.805' r='1.36903' fill='white' />
				<text id='Stadsgränsvägen' transform='translate(344.473 425.825) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Stadsgränsvägen</tspan></text>
			</g>
			<g id='Hartvigsgatan'>
				<circle id='Ellipse 7' cx='345.842' cy='388.805' r='1.36903' fill='white' />
				<text transform='translate(315.723 421.386) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Hartvigsgatan</tspan></text>
			</g>
			<g id='Gabrieljansvägen'>
				<circle id='Ellipse 8' cx='317.092' cy='388.805' r='1.36903' fill='white' />
				<text transform='translate(281.497 427.194) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Gabrieljansvägen</tspan></text>
			</g>
			<g id='Hedvägen'>
				<circle id='Ellipse 11' cx='184.297' cy='398.388' r='1.36903' fill='white' />
				<text transform='translate(192.511 394.281)' fill='#282828'  ><tspan x='0' y='5.49132'>Hedvägen</tspan></text>
			</g>
			<g id='Klockarvägen'>
				<text transform='translate(178.819 407.971)' fill='#282828'  ><tspan x='0' y='5.49132'>Klockarvägen</tspan></text>
				<circle id='Ellipse 12' cx='170.605' cy='412.078' r='1.36903' fill='white' />
			</g>
			<g id='Kyrkvägen'>
				<text transform='translate(165.13 421.661)' fill='#282828'  ><tspan x='0' y='5.49132'>Kyrkvägen</tspan></text>
				<circle id='Ellipse 15' cx='156.916' cy='425.768' r='1.36903' fill='white' />
			</g>
			<g id='Löftets Gränd'>
				<text id='Löftets gränd' transform='translate(128.166 402.495)' fill='#282828'  ><tspan x='0' y='5.49132'>Löftets gränd</tspan></text>
				<circle id='Ellipse 16' cx='119.952' cy='406.602' r='1.36903' fill='white' />
			</g>
			<g id='Paradisgränd'>
				<text transform='translate(100.785 375.114)' fill='#282828'  ><tspan x='0' y='5.49132'>Paradisgränd</tspan></text>
				<circle id='Ellipse 18' cx='92.5712' cy='379.221' r='1.36903' fill='white' />
			</g>
			<g id='Glädjens Gränd'>
				<text id='Glädjens gränd' transform='translate(114.476 388.804)' fill='#282828'  ><tspan x='0' y='5.49132'>Glädjens gränd</tspan></text>
				<circle id='Ellipse 17' cx='106.262' cy='392.912' r='1.36903' fill='white' />
			</g>
			<g id='Kronoparksvägen'>
				<text transform='translate(247.271 427.194) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Kronoparksvägen</tspan></text>
				<circle id='Ellipse 10' cx='282.866' cy='388.805' r='1.36903' fill='white' />
			</g>
			<g id='Kungäanget'>
				<text id='Kungsänget' transform='translate(223.998 416.546) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Kungsänget</tspan></text>
				<circle id='Ellipse 19' cx='247.271' cy='388.805' r='1.36903' fill='white' />
			</g>
			<g id='Vasaplan'>
				<text transform='translate(527.923 407.971)' fill='#282828'  ><tspan x='0' y='5.49132'>Vasaplan</tspan></text>
				<rect id='Rectangle 1' x='535.11' y='357.659' width='3.42258' height='48.6006' rx='1.71129' fill='white' stroke='#C0C0C0' strokeWidth='0.684515' />
			</g>
			<g id='Universitetssjukhuset'>
				<text transform='translate(683.992 423.557) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Universitets-
				</tspan><tspan x='0' y='12.4913'>sjukhuset</tspan></text>
				<rect id='Rectangle 2' x='706.239' y='371.349' width='3.42258' height='28.0651' rx='1.71129' fill='white' stroke='#C0C0C0' strokeWidth='0.684515' />
			</g>
			<g id='Midgårdsskolan'>
				<text transform='translate(425.246 344.886) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Midgårdsskolan</tspan></text>
				<circle id='Ellipse 31' cx='455.365' cy='312.139' r='1.36903' fill='white' />
			</g>
			<g id='Nygatan'>
				<text id='Nygatan**' transform='translate(503.28 331.305)' fill='#282828'  ><tspan x='0' y='5.49132'>Nygatan**</tspan></text>
				<circle id='Ellipse 25' cx='490.959' cy='335.412' r='1.36903' fill='white' />
				<circle id='Ellipse 27' cx='484.114' cy='335.412' r='1.36903' fill='white' />
				<circle id='Ellipse 26' cx='497.805' cy='335.412' r='1.36903' fill='white' />
			</g>
			<g id='Parkvägen'>
				<text transform='translate(536.138 271.068)' fill='#282828'  ><tspan x='0' y='5.49132'>Parkvägen</tspan></text>
				<circle id='Ellipse 34' cx='530.661' cy='275.175' r='1.36903' fill='white' />
			</g>
			<g id='Vallarestigen'>
				<text transform='translate(536.138 205.354)' fill='#282828'  ><tspan x='0' y='5.49132'>Vallarestigen</tspan></text>
				<circle id='Ellipse 37' cx='530.661' cy='209.462' r='1.36903' fill='white' />
			</g>
			<g id='Kapellvägen'>
				<text transform='translate(536.138 183.45)' fill='#282828'  ><tspan x='0' y='5.49132'>Kapellvägen</tspan></text>
				<circle id='Ellipse 38' cx='530.661' cy='187.557' r='1.36903' fill='white' />
			</g>
			<g id='Vargvägen'>
				<text transform='translate(539.537 164.784) rotate(-45)' fill='#282828'  ><tspan x='0.966965' y='5.49132'>Vargvägen</tspan></text>
				<circle id='Ellipse 39' cx='562.148' cy='141.01' r='1.36903' fill='white' />
			</g>
			<g id='Formvägen'>
				<text transform='translate(566.656 129.45) rotate(-45)' fill='#282828'  ><tspan x='0.876019' y='5.49132'>Formvägen</tspan></text>
				<circle id='Ellipse 162' cx='589.529' cy='105.415' r='1.36903' fill='white' />
			</g>
			<g id='Ersboda Handelsområde'>
				<text transform='translate(489.493 138.163) rotate(-45)' fill='#282828'  ><tspan x='20.3896' y='5.49132'>Ersboda
				</tspan><tspan x='0.629616' y='12.4913'>Handelsområde</tspan></text>
				<circle id='Ellipse 163' cx='519.709' cy='105.415' r='1.36903' fill='white' />
			</g>
			<g id='Mårdvagen'>
				<text id='Mårdvägen' transform='translate(567.625 165.045) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Mårdvägen</tspan></text>
				<circle id='Ellipse 40' cx='589.529' cy='141.01' r='1.36903' fill='white' />
			</g>
			<g id='Fogvägen'>
				<text transform='translate(621.017 112.26)' fill='#282828'  ><tspan x='0' y='5.49132'>Fogvägen</tspan></text>
				<circle id='Ellipse 41' cx='608.695' cy='116.368' r='1.36903' fill='white' />
				<circle id='Ellipse 42' cx='615.541' cy='116.368' r='1.36903' fill='white' />
				<circle id='Ellipse 43' cx='601.85' cy='116.368' r='1.36903' fill='white' />
			</g>
			<g id='Dalstigen'>
				<text transform='translate(536.138 227.259)' fill='#282828'  ><tspan x='0' y='5.49132'>Dalstigen</tspan></text>
				<circle id='Ellipse 36' cx='530.661' cy='231.366' r='1.36903' fill='white' />
			</g>
			<g id='Solvändan'>
				<text transform='translate(536.138 249.163)' fill='#282828'  ><tspan x='0' y='5.49132'>Solvändan</tspan></text>
				<circle id='Ellipse 35' cx='530.661' cy='253.27' r='1.36903' fill='white' />
			</g>
			<g id='Löjtnantsgatan'>
				<text transform='translate(521.077 292.972)' fill='#282828'  ><tspan x='0' y='5.49132'>Löjtnantsgatan</tspan></text>
				<circle id='Ellipse 33' cx='512.863' cy='297.079' r='1.36903' fill='white' />
			</g>
			<g id='Sporthallen'>
				<text transform='translate(564.887 317.615)' fill='#282828'  ><tspan x='0' y='5.49132'>Sporthallen</tspan></text>
				<circle id='Ellipse 86' cx='604.589' cy='321.722' r='1.36903' fill='white' />
			</g>
			<g id='Gammlia'>
				<text transform='translate(585.422 303.925)' fill='#282828'  ><tspan x='0' y='5.49132'>Gammlia</tspan></text>
				<circle id='Ellipse 88' cx='618.279' cy='308.032' r='1.36903' fill='white' />
			</g>
			<g id='Tuvgränd'>
				<text transform='translate(556.672 331.305)' fill='#282828'  ><tspan x='0' y='5.49132'>Tuvgränd</tspan></text>
				<circle id='Ellipse 87' cx='590.897' cy='335.412' r='1.36903' fill='white' />
			</g>
			<g id='Renmarkstorget'>
				<circle id='Ellipse 1' cx='506.017' cy='388.805' r='1.36903' fill='white' />
				<text transform='translate(475.899 424.29) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Renmarkstorget</tspan></text>
				<circle id='Ellipse 21' cx='506.017' cy='381.959' r='1.36903' fill='white' />
				<circle id='Ellipse 22' cx='506.017' cy='375.114' r='1.36903' fill='white' />
				<circle id='Ellipse 23' cx='506.017' cy='368.269' r='1.36903' fill='white' />
				<circle id='Ellipse 24' cx='506.017' cy='361.424' r='1.36903' fill='white' />
			</g>
			<g id='Stadshuset'>
				<circle id='Ellipse 2' cx='474.531' cy='388.805' r='1.36903' fill='white' />
				<circle id='Ellipse 28' cx='474.531' cy='381.959' r='1.36903' fill='white' />
				<text transform='translate(449.889 414.209) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Stadshuset</tspan></text>
			</g>
			<g id='Smedsgatan'>
				<circle id='Ellipse 3' cx='458.102' cy='388.805' r='1.36903' fill='white' />
				<text transform='translate(430.722 415.744) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Smedsgatan</tspan></text>
				<circle id='Ellipse 29' cx='458.102' cy='381.959' r='1.36903' fill='white' />
			</g>
			<g id='Dragonskolan'>
				<circle id='Ellipse 4' cx='438.936' cy='388.805' r='1.36903' fill='white' />
				<text transform='translate(410.187 417.68) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Dragonskolan</tspan></text>
				<circle id='Ellipse 30' cx='438.936' cy='381.959' r='1.36903' fill='white' />
			</g>
			<g id='Församlingsgården'>
				<circle id='Ellipse 20' cx='567.625' cy='388.805' r='1.36903' fill='white' />
				<text id='Församlingsgården' transform='translate(532.03 441.051) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Församlingsgården</tspan></text>
				<circle id='Ellipse 44' cx='567.625' cy='395.65' r='1.36903' fill='white' />
				<circle id='Ellipse 45' cx='567.625' cy='402.495' r='1.36903' fill='white' />
				<circle id='Ellipse 46' cx='567.625' cy='381.959' r='1.36903' fill='white' />
				<circle id='Ellipse 47' cx='567.625' cy='375.114' r='1.36903' fill='white' />
			</g>
			<g id='Östermalmsgatan'>
				<text id='Östermalmsgatan' transform='translate(629.893 433.378) rotate(-45)' fill='#282828'  ><tspan x='0.511795' y='5.49132'>Östermalmsgatan</tspan></text>
				<circle id='Ellipse 58' cx='663.456' cy='388.805' r='1.36903' fill='white' />
				<circle id='Ellipse 59' cx='663.456' cy='395.65' r='1.36903' fill='white' />
				<circle id='Ellipse 60' cx='663.456' cy='381.959' r='1.36903' fill='white' />
				<circle id='Ellipse 61' cx='663.456' cy='375.114' r='1.36903' fill='white' />
			</g>
			<g id='Östra Standgatan'>
				<text id='Östra strandgatan' transform='translate(601.144 434.747) rotate(-45)' fill='#282828'  ><tspan x='0.383411' y='5.49132'>Östra strandgatan</tspan></text>
				<circle id='Ellipse 62' cx='636.076' cy='388.805' r='1.36903' fill='white' />
				<circle id='Ellipse 63' cx='636.076' cy='395.65' r='1.36903' fill='white' />
				<circle id='Ellipse 64' cx='636.076' cy='381.959' r='1.36903' fill='white' />
				<circle id='Ellipse 65' cx='636.076' cy='375.114' r='1.36903' fill='white' />
			</g>
			<g id='Fabriksgatan'>
				<text transform='translate(583.346 424.665) rotate(-45)' fill='#282828'  ><tspan x='0.881195' y='5.49132'>Fabriksgatan</tspan></text>
				<circle id='Ellipse 66' cx='608.695' cy='388.805' r='1.36903' fill='white' />
				<circle id='Ellipse 67' cx='608.695' cy='395.65' r='1.36903' fill='white' />
				<circle id='Ellipse 68' cx='608.695' cy='381.959' r='1.36903' fill='white' />
				<circle id='Ellipse 69' cx='608.695' cy='375.114' r='1.36903' fill='white' />
			</g>
			<g id='Universum'>
				<circle id='Ellipse 48' cx='760.658' cy='375.114' r='1.36903' fill='white' />
				<circle id='Ellipse 50' cx='760.658' cy='368.269' r='1.36903' fill='white' />
				<circle id='Ellipse 49' cx='760.658' cy='381.959' r='1.36903' fill='white' />
				<text transform='translate(739.416 405.734) rotate(-45)' fill='#282828'  ><tspan x='0.977661' y='5.49132'>Universum</tspan></text>
			</g>
			<g id='Klintvägen'>
				<circle id='Ellipse 55' cx='757.92' cy='443.566' r='1.36903' fill='white' />
				<text transform='translate(762.5 439.572)' fill='#282828'  ><tspan x='0' y='5.49132'>Klintvägen</tspan></text>
			</g>
			<g id='Laboratorvägen'>
				<circle id='Ellipse 56' cx='757.92' cy='470.946' r='1.36903' fill='white' />
				<text id='Laboratorv.' transform='translate(763.396 466.839)' fill='#282828'  ><tspan x='0' y='5.49132'>Laboratorv.</tspan></text>
			</g>
			<g id='Ãlidhems C'>
				<circle id='Ellipse 96' cx='798.991' cy='458.625' r='1.36903' fill='white' />
				<circle id='Ellipse 97' cx='805.836' cy='458.625' r='1.36903' fill='white' />
				<text transform='translate(811.312 455.887)' fill='#282828'  ><tspan x='0' y='5.49132'>Ålidhems C</tspan></text>
			</g>
			<g id='Carlslid'>
				<circle cx='805.836' cy='492.851' r='1.36903' fill='white' />
				<text transform='translate(811.312 488.744)' fill='#282828'  ><tspan x='0' y='5.49132'>Carlslid</tspan></text>
			</g>
			<g id='Flintvägen'>
				<circle cx='805.836' cy='525.707' r='1.36903' fill='white' />
				<text transform='translate(811.312 521.6)' fill='#282828'  ><tspan x='0' y='5.49132'>Flintvägen</tspan></text>
			</g>
			<g id='Gnejsvägen'>
				<circle cx='805.836' cy='538.029' r='1.36903' fill='white' />
				<text transform='translate(811.312 533.922)' fill='#282828'  ><tspan x='0' y='5.49132'>Gnejsvägen</tspan></text>
			</g>
			<g id='Alidhöjd'>
				<circle id='Ellipse 98' cx='798.991' cy='431.245' r='1.36903' fill='white' />
				<circle id='Ellipse 99' cx='805.836' cy='431.245' r='1.36903' fill='white' />
				<text id='Ãlidhöjd' transform='translate(811.312 427.137)' fill='#282828'  ><tspan x='0' y='5.49132'>Ålidhöjd</tspan></text>
			</g>
			<g id='Assistentvägen'>
				<circle id='Ellipse 57' cx='757.92' cy='509.279' r='1.36903' fill='white' />
				<text id='Assistentv.' transform='translate(763.396 505.172)' fill='#282828'  ><tspan x='0' y='5.49132'>Assistentv.</tspan></text>
			</g>
			<g id='Elevstråket'>
				<circle id='Ellipse 70' cx='757.92' cy='528.446' r='1.36903' fill='white' />
				<text transform='translate(763.396 524.339)' fill='#282828'  ><tspan x='0' y='5.49132'>Elevstråket</tspan></text>
			</g>
			<g id='Dammen'>
				<circle id='Ellipse 76' cx='722.325' cy='561.302' r='1.36903' fill='white' />
				<text transform='translate(726.433 557.195)' fill='#282828'  ><tspan x='0' y='5.49132'>Dammen</tspan></text>
			</g>
			<g id='Strömpilen'>
				<circle id='Ellipse 77' cx='722.325' cy='583.207' r='1.36903' fill='white' />
				<text transform='translate(726.433 579.1)' fill='#282828'  ><tspan x='0' y='5.49132'>Strömpilen</tspan></text>
			</g>
			<g id='Tegelbruksvägen'>
				<circle id='Ellipse 78' cx='722.325' cy='628.385' r='1.36903' fill='white' />
				<text transform='translate(726.433 624.278)' fill='#282828'  ><tspan x='0' y='5.49132'>Tegelbruksvägen</tspan></text>
			</g>
			<g id='Porfyrvägen'>
				<circle id='Ellipse 71' cx='757.92' cy='568.148' r='1.36903' fill='white' />
				<text transform='translate(762.027 564.04)' fill='#282828'  ><tspan x='0' y='5.49132'>Porfyrvägen</tspan></text>
			</g>
			<g id='Kvartsvägen'>
				<circle id='Ellipse 72' cx='779.824' cy='584.576' r='1.36903' fill='white' />
				<text transform='translate(756.551 611.916) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Kvartsvägen</tspan></text>
			</g>
			<g id='Carshöjd'>
				<circle id='Ellipse 73' cx='807.205' cy='584.576' r='1.36903' fill='white' />
				<text id='Carlshöjd' transform='translate(789.408 607.076) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Carlshöjd</tspan></text>
			</g>
			<g id='Volvo'>
				<text transform='translate(300.595 529.511) rotate(-45)' fill='#868686'  ><tspan x='0.502183' y='5.49132'>Volvo</tspan></text>
				<g id='arrow_upward_FILL0_wght700_GRAD0_opsz48 3'>
					<path id='Vector' d='M313.504 513.654L310.754 513.654L311.998 514.892L311.616 515.274L309.728 513.386L311.616 511.498L311.998 511.875L310.754 513.118L313.504 513.118L313.504 513.654Z' fill='white' />
				</g>
			</g>
			<g id='Kolbacksvägen'>
				<circle id='Ellipse 74' cx='757.92' cy='546.243' r='1.36903' fill='white' />
				<circle id='Ellipse 75' cx='763.396' cy='553.088' r='1.36903' fill='white' />
				<text id='Kolbäcksvägen' transform='translate(762.027 542.136)' fill='#282828'  ><tspan x='0' y='5.49132'>Kolbäcksvägen</tspan></text>
			</g>
			<g id='Växthuset'>
				<circle id='Ellipse 51' cx='788.039' cy='375.114' r='1.36903' fill='white' />
				<circle id='Ellipse 52' cx='788.039' cy='368.269' r='1.36903' fill='white' />
				<circle id='Ellipse 53' cx='788.039' cy='381.959' r='1.36903' fill='white' />
				<text transform='translate(768.872 405.027) rotate(-45)' fill='#282828'  ><tspan x='0.410864' y='5.49132'>Växthuset</tspan></text>
			</g>
			<g id='IKSU-hallen'>
				<circle id='Ellipse 83' cx='815.419' cy='368.269' r='1.36903' fill='white' />
				<text transform='translate(814.05 372.376)' fill='#282828'  ><tspan x='0' y='5.49132'>IKSU-hallen</tspan></text>
			</g>
			<g id='Umeå C'>
				<text transform='translate(527.923 344.996)' fill='#282828'  ><tspan x='0' y='5.49132'>Umeå C</tspan></text>
				<g id='train_FILL0_wght400_GRAD0_opsz48 1'>
					<path d='M520.85 349.416V346.707C520.85 346.512 520.895 346.342 520.985 346.197C521.075 346.052 521.214 345.933 521.402 345.841C521.59 345.748 521.828 345.679 522.115 345.634C522.403 345.589 522.742 345.566 523.131 345.566C523.54 345.566 523.888 345.587 524.176 345.63C524.464 345.673 524.699 345.741 524.882 345.833C525.065 345.926 525.199 346.044 525.285 346.186C525.37 346.329 525.413 346.502 525.413 346.707V349.416C525.413 349.697 525.317 349.933 525.124 350.126C524.932 350.318 524.695 350.415 524.415 350.415L524.843 350.843V350.985H524.343L523.773 350.415H522.49L521.919 350.985H521.42V350.843L521.848 350.415C521.567 350.415 521.331 350.318 521.138 350.126C520.946 349.933 520.85 349.697 520.85 349.416ZM523.131 345.994C522.561 345.994 522.15 346.031 521.898 346.104C521.646 346.178 521.465 346.284 521.356 346.422H524.928C524.843 346.293 524.661 346.19 524.383 346.112C524.105 346.033 523.687 345.994 523.131 345.994ZM521.277 347.955H522.946V346.849H521.277V347.955ZM524.415 348.383H521.277H524.985H524.415ZM523.374 347.955H524.985V346.849H523.374V347.955ZM522.097 349.595C522.207 349.595 522.299 349.557 522.376 349.481C522.452 349.405 522.49 349.312 522.49 349.203C522.49 349.093 522.452 349 522.376 348.924C522.299 348.848 522.207 348.81 522.097 348.81C521.988 348.81 521.895 348.848 521.819 348.924C521.743 349 521.705 349.093 521.705 349.203C521.705 349.312 521.743 349.405 521.819 349.481C521.895 349.557 521.988 349.595 522.097 349.595ZM524.165 349.595C524.275 349.595 524.367 349.557 524.443 349.481C524.519 349.405 524.557 349.312 524.557 349.203C524.557 349.093 524.519 349 524.443 348.924C524.367 348.848 524.275 348.81 524.165 348.81C524.056 348.81 523.963 348.848 523.887 348.924C523.811 349 523.773 349.093 523.773 349.203C523.773 349.312 523.811 349.405 523.887 349.481C523.963 349.557 524.056 349.595 524.165 349.595ZM521.848 350.023H524.415C524.576 350.023 524.712 349.963 524.821 349.844C524.931 349.725 524.985 349.583 524.985 349.416V348.383H521.277V349.416C521.277 349.583 521.332 349.725 521.441 349.844C521.551 349.963 521.686 350.023 521.848 350.023ZM523.131 346.422H524.928H521.356H523.131Z' fill='#282828' />
				</g>
			</g>
			<g id='Umeå Ö'>
				<text transform='translate(670.635 416.615) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Umeå Ö</tspan></text>
				<g id='train_FILL0_wght400_GRAD0_opsz48 2' clipPath='url(#clip0_21_922)'>
					<path id='Vector_3' d='M668.759 424.742L666.843 422.826C666.705 422.688 666.617 422.536 666.578 422.37C666.539 422.203 666.554 422.021 666.621 421.823C666.688 421.624 666.808 421.408 666.979 421.172C667.15 420.937 667.374 420.682 667.65 420.406C667.939 420.117 668.2 419.886 668.434 419.713C668.667 419.54 668.881 419.421 669.076 419.357C669.271 419.293 669.45 419.282 669.611 419.322C669.772 419.362 669.925 419.455 670.07 419.599L671.986 421.515C672.184 421.713 672.283 421.949 672.283 422.221C672.283 422.493 672.184 422.729 671.986 422.927L672.591 422.927L672.691 423.028L672.339 423.381L671.532 423.381L670.624 424.288L670.624 425.095L670.271 425.448L670.171 425.347L670.171 424.742C669.972 424.94 669.737 425.039 669.465 425.039C669.192 425.039 668.957 424.94 668.759 424.742ZM667.952 420.708C667.549 421.112 667.284 421.429 667.158 421.659C667.032 421.889 666.979 422.092 666.999 422.266L669.525 419.74C669.374 419.71 669.172 419.766 668.92 419.907C668.668 420.048 668.345 420.315 667.952 420.708ZM668.028 423.406L669.208 422.226L668.426 421.445L667.246 422.624L668.028 423.406ZM670.549 421.49L668.33 423.708L670.952 421.087L670.549 421.49ZM669.51 421.924L670.649 420.784L669.868 420.003L668.729 421.142L669.51 421.924ZM669.767 423.986C669.844 423.908 669.883 423.816 669.883 423.708C669.883 423.601 669.844 423.508 669.767 423.431C669.69 423.354 669.597 423.315 669.49 423.315C669.382 423.315 669.29 423.354 669.213 423.431C669.135 423.508 669.097 423.601 669.097 423.708C669.097 423.816 669.135 423.908 669.213 423.986C669.29 424.063 669.382 424.102 669.49 424.102C669.597 424.102 669.69 424.063 669.767 423.986ZM671.229 422.524C671.307 422.446 671.345 422.354 671.345 422.246C671.345 422.139 671.307 422.046 671.229 421.969C671.152 421.892 671.06 421.853 670.952 421.853C670.844 421.853 670.752 421.892 670.675 421.969C670.597 422.046 670.559 422.139 670.559 422.246C670.559 422.354 670.597 422.446 670.675 422.524C670.752 422.601 670.844 422.64 670.952 422.64C671.06 422.64 671.152 422.601 671.229 422.524ZM669.893 424.465L671.708 422.65C671.823 422.535 671.876 422.398 671.87 422.236C671.863 422.075 671.801 421.935 671.683 421.818L670.952 421.087L668.33 423.708L669.061 424.44C669.179 424.557 669.318 424.619 669.48 424.626C669.641 424.633 669.779 424.579 669.893 424.465ZM668.255 421.011L669.525 419.74L666.999 422.266L668.255 421.011Z' fill='#282828' />
				</g>
			</g>
			<g id='Glaciärgatan'>
				<circle id='Ellipse 80' cx='822.265' cy='344.995' r='1.36903' fill='white' />
				<text transform='translate(827.74 340.888)' fill='#282828'  ><tspan x='0' y='5.49132'>Glaciärgatan</tspan></text>
			</g>
			<g id='Rullstensgatan'>
				<circle id='Ellipse 81' cx='822.265' cy='309.401' r='1.36903' fill='white' />
				<text transform='translate(827.74 305.294)' fill='#282828'  ><tspan x='0' y='5.49132'>Rullstensgatan</tspan></text>
			</g>
			<g id='Istidsgatan'>
				<circle id='Ellipse 82' cx='809.943' cy='264.223' r='1.36903' fill='white' />
				<text transform='translate(816.789 260.116)' fill='#282828'  ><tspan x='0' y='5.49132'>Istidsgatan</tspan></text>
			</g>
			<g id='Mariehems C'>
				<circle id='Ellipse 84' cx='782.562' cy='220.414' r='1.36903' fill='white' />
				<circle id='Ellipse 85' cx='775.717' cy='220.414' r='1.36903' fill='white' />
				<circle id='Ellipse 92' cx='768.872' cy='220.414' r='1.36903' fill='white' />
				<text transform='translate(788.038 216.307)' fill='#282828'  ><tspan x='0' y='5.49132'>Mariehems C</tspan></text>
			</g>
			<g id='Nydala'>
				<circle id='Ellipse 141' cx='782.562' cy='193.033' r='1.36903' fill='white' />
				<circle id='Ellipse 142' cx='775.717' cy='193.033' r='1.36903' fill='white' />
				<circle id='Ellipse 143' cx='768.872' cy='193.033' r='1.36903' fill='white' />
				<text transform='translate(788.038 188.926)' fill='#282828'  ><tspan x='0' y='5.49132'>Nydala</tspan></text>
			</g>
			<g id='Mariehemshöjd'>
				<circle id='Ellipse 145' cx='782.562' cy='161.546' r='1.36903' fill='white' />
				<circle id='Ellipse 146' cx='775.718' cy='161.546' r='1.36903' fill='white' />
				<text transform='translate(788.039 157.438)' fill='#282828'  ><tspan x='0' y='5.49132'>Mariehemshöjd</tspan></text>
			</g>
			<g id='Terrängvägen'>
				<text transform='translate(611.434 327.324) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Terrängvägen</tspan></text>
				<circle id='Ellipse 89' cx='637.445' cy='298.449' r='1.36903' fill='white' />
			</g>
			<g id='Magnusdalsvägen'>
				<text transform='translate(630.6 335.068) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Magnusdalsvägen</tspan></text>
				<circle id='Ellipse 90' cx='664.825' cy='298.449' r='1.36903' fill='white' />
			</g>
			<g id='Östra Norrlandsgatan'>
				<text id='Ö Norrlandsg.' transform='translate(615.54 354.579)' fill='#282828'  ><tspan x='0' y='5.49132'>Ö Norrlandsg.</tspan></text>
				<circle id='Ellipse 93' cx='608.695' cy='357.317' r='1.36903' fill='white' />
			</g>
			<g id='Skidspåret'>
				<text transform='translate(677.809 368.77) rotate(-45)' fill='#282828'  ><tspan x='0.956268' y='5.49132'>Skidspåret</tspan></text>
				<circle id='Ellipse 94' cx='699.051' cy='344.995' r='1.36903' fill='white' />
			</g>
			<g id='Fridhemsvägen'>
				<text id='Fridhemsv.' transform='translate(651.843 367.356) rotate(-45)' fill='#282828'  ><tspan x='0.18619' y='5.49132'>Fridhemsv.</tspan></text>
				<circle id='Ellipse 95' cx='671.672' cy='344.995' r='1.36903' fill='white' />
			</g>
			<g id='Blåbärsvägen'>
				<text transform='translate(666.195 327.324) rotate(-45)' fill='#282828'  ><tspan x='0' y='5.49132'>Blåbärsvägen</tspan></text>
				<circle id='Ellipse 91' cx='692.207' cy='298.449' r='1.36903' fill='white' />
			</g>
			<g id='Varvsgatan'>
				<text transform='translate(526.554 483.268)' fill='#282828'  ><tspan x='0' y='5.49132'>Varvsgatan</tspan></text>
				<circle id='Ellipse 106' cx='522.447' cy='487.375' r='1.36903' fill='white' />
				<circle id='Ellipse 107' cx='515.601' cy='487.375' r='1.36903' fill='white' />
			</g>
			<g id='Obbolavägen'>
				<text transform='translate(526.554 491.482)' fill='#868686'  ><tspan x='0' y='5.49132'>Obbolavägen</tspan></text>
				<g id='arrow_upward_FILL0_wght700_GRAD0_opsz48 1'>
					<path id='Vector_4' d='M522.179 497.477V494.728L520.941 495.971L520.559 495.589L522.447 493.701L524.335 495.589L523.958 495.971L522.715 494.728V497.477H522.179Z' fill='white' />
				</g>
				<g id='arrow_upward_FILL0_wght700_GRAD0_opsz48 2'>
					<path id='Vector_5' d='M515.333 497.477V494.728L514.095 495.971L513.713 495.589L515.601 493.701L517.489 495.589L517.113 495.971L515.869 494.728V497.477H515.333Z' fill='white' />
				</g>
			</g>
			<g id='Tranbärsvägen'>
				<circle id='Ellipse 116' cx='244.533' cy='536.66' r='1.36903' fill='white' />
				<text transform='translate(252.747 532.553)' fill='#282828'  ><tspan x='0' y='5.49132'>Tranbärsvägen</tspan></text>
			</g>
			<g id='Päronvägen'>
				<circle id='Ellipse 117' cx='230.844' cy='550.35' r='1.36903' fill='white' />
				<text transform='translate(239.058 546.243)' fill='#282828'  ><tspan x='0' y='5.49132'>Päronvägen</tspan></text>
			</g>
			<g id='Klarbarsvägen'>
				<circle id='Ellipse 118' cx='215.784' cy='565.409' r='1.36903' fill='white' />
				<text id='Klarbärsvägen' transform='translate(223.998 561.302)' fill='#282828'  ><tspan x='0' y='5.49132'>Klarbärsvägen</tspan></text>
			</g>
			<g id='Travbanevägen'>
				<circle id='Ellipse 119' cx='202.094' cy='579.1' r='1.36903' fill='white' />
				<text transform='translate(210.308 574.993)' fill='#282828'  ><tspan x='0' y='5.49132'>Travbanevägen</tspan></text>
			</g>
			<g id='Grusasvägen'>
				<circle id='Ellipse 120' cx='188.403' cy='592.79' r='1.36903' fill='white' />
				<text id='Grusåsvägen' transform='translate(196.617 588.683)' fill='#282828'  ><tspan x='0' y='5.49132'>Grusåsvägen</tspan></text>
			</g>
			<g id='Röbacks C'>
				<circle id='Ellipse 121' cx='167.868' cy='613.326' r='1.36903' fill='white' />
				<text id='Röbäcks C' transform='translate(176.082 609.219)' fill='#282828'  ><tspan x='0' y='5.49132'>Röbäcks C</tspan></text>
			</g>
			<g id='Rosettvägen'>
				<circle id='Ellipse 122' cx='147.332' cy='633.861' r='1.36903' fill='white' />
				<text transform='translate(155.546 629.754)' fill='#282828'  ><tspan x='0' y='5.49132'>Rosettvägen</tspan></text>
			</g>
			<g id='Mantelvägen'>
				<circle id='Ellipse 123' cx='119.952' cy='661.242' r='1.36903' fill='white' />
				<text transform='translate(128.166 657.135)' fill='#282828'  ><tspan x='0' y='5.49132'>Mantelvägen</tspan></text>
			</g>
			<g id='Västerslätts C'>
				<text transform='translate(364.008 361.424)' fill='#282828'  ><tspan x='0.153831' y='5.49132'>Västerslätts C</tspan></text>
				<circle id='Ellipse 128' cx='410.185' cy='365.531' r='1.36903' fill='white' />
			</g>
			<g id='Kornettstråket'>
				<text transform='translate(340.365 338.15)' fill='#282828'  ><tspan x='0.324924' y='5.49132'>Kornettstråket</tspan></text>
				<circle id='Ellipse 129' cx='386.912' cy='342.257' r='1.36903' fill='white' />
			</g>
			<g id='Rödang'>
				<text id='Rödäng' transform='translate(340.365 320.353)' fill='#282828'  ><tspan x='0.0100174' y='5.49132'>Rödäng</tspan></text>
				<circle id='Ellipse 130' cx='369.115' cy='324.46' r='1.36903' fill='white' />
			</g>
			<g id='Rödberget'>
				<text transform='translate(319.83 308.032)' fill='#282828'  ><tspan x='0.512438' y='5.49132'>Rödberget</tspan></text>
				<circle id='Ellipse 131' cx='356.794' cy='312.139' r='1.36903' fill='white' />
			</g>
			<g id='Södra Slevgränd'>
				<text id='Södra slevgränd' transform='translate(718.218 84.8799)' fill='#282828'  ><tspan x='0' y='5.49132'>Södra slevgränd</tspan></text>
				<circle id='Ellipse 139' cx='710.004' cy='88.987' r='1.36903' fill='white' />
			</g>
			<g id='Byttgränd'>
				<text transform='translate(718.219 61.6062)' fill='#282828'  ><tspan x='0' y='5.49132'>Byttgränd</tspan></text>
				<circle id='Ellipse 132' cx='710.004' cy='65.7133' r='1.36903' fill='white' />
				<circle id='Ellipse 133' cx='703.159' cy='65.7133' r='1.36903' fill='white' />
			</g>
			<g id='Ostkroken'>
				<text transform='translate(638.814 71.1895)' fill='#282828'  ><tspan x='0' y='5.49132'>Ostkroken</tspan></text>
				<circle id='Ellipse 138' cx='640.183' cy='82.1417' r='1.36903' fill='white' />
			</g>
			<g id='Bruksvägen'>
				<text transform='translate(679.885 104.046)' fill='#282828'  ><tspan x='0' y='5.49132'>Bruksvägen</tspan></text>
				<circle id='Ellipse 140' cx='681.254' cy='101.308' r='1.36903' fill='white' />
			</g>
			<g id='Kärnvägen'>
				<text transform='translate(718.219 42.4399)' fill='#282828'  ><tspan x='0' y='5.49132'>Kärnvägen</tspan></text>
				<circle id='Ellipse 134' cx='710.004' cy='46.547' r='1.36903' fill='white' />
				<circle id='Ellipse 135' cx='703.159' cy='46.547' r='1.36903' fill='white' />
			</g>
			<g id='Ö Ersboda'>
				<text transform='translate(718.219 20.5354)' fill='#282828'  ><tspan x='0' y='5.49132'>Ö Ersboda</tspan></text>
				<circle id='Ellipse 136' cx='710.004' cy='24.6425' r='1.36903' fill='white' />
				<circle id='Ellipse 137' cx='703.159' cy='24.6425' r='1.36903' fill='white' />
			</g>
			<g id='Marieberg'>
				<text transform='translate(690.7 168.585) rotate(-45)' fill='#282828'  ><tspan x='0.271822' y='5.49132'>Marieberg</tspan></text>
				<circle id='Ellipse 144' cx='710.004' cy='145.117' r='1.36903' fill='white' />
				<circle id='Ellipse 147' cx='710.004' cy='138.272' r='1.36903' fill='white' />
			</g>
			<g id='Mariebergsskolan'>
				<text transform='translate(641.954 183.106) rotate(-45)' fill='#282828'  ><tspan x='0.420883' y='5.49132'>Mariebergsskolan</tspan></text>
				<circle id='Ellipse 148' cx='675.778' cy='145.117' r='1.36903' fill='white' />
				<circle id='Ellipse 149' cx='675.778' cy='138.272' r='1.36903' fill='white' />
			</g>
			<g id='Hermelinvägen'>
				<text transform='translate(605.984 178.005) rotate(-45)' fill='#282828'  ><tspan x='0.672466' y='5.49132'>Hermelinvägen</tspan></text>
				<circle id='Ellipse 150' cx='634.707' cy='145.117' r='1.36903' fill='white' />
				<circle id='Ellipse 151' cx='634.707' cy='138.272' r='1.36903' fill='white' />
			</g>
			<g id='Morkullevägen'>
				<text id='Morkullev.' transform='translate(727.801 183.45)' fill='#868686'  ><tspan x='0' y='5.49132'>Morkullev.</tspan></text>
				<g id='arrow_upward_FILL0_wght700_GRAD0_opsz48 4'>
					<path id='Vector_6' d='M722.057 189.445V186.696L720.819 187.939L720.437 187.557L722.325 185.669L724.213 187.557L723.836 187.939L722.593 186.696V189.445H722.057Z' fill='white' />
				</g>
			</g>
			<g id='Bräntbersskolan'>
				<text id='Bräntbergs- skolan' transform='translate(727.801 198.509)' fill='#868686'  ><tspan x='0' y='5.49132'>Bräntbergs-
				</tspan><tspan x='0' y='12.4913'>skolan</tspan></text>
				<g id='arrow_upward_FILL0_wght700_GRAD0_opsz48 5'>
					<path id='Vector_7' d='M722.057 204.505V201.755L720.819 202.999L720.437 202.616L722.325 200.728L724.213 202.616L723.836 202.999L722.593 201.755V204.505H722.057Z' fill='white' />
				</g>
			</g>
			<g id='Trastvägen'>
				<text transform='translate(727.801 220.414)' fill='#868686'  ><tspan x='0' y='5.49132'>Trastvägen</tspan></text>
				<g id='arrow_upward_FILL0_wght700_GRAD0_opsz48 6'>
					<path id='Vector_8' d='M722.057 226.409V223.66L720.819 224.903L720.437 224.521L722.325 222.633L724.213 224.521L723.836 224.903L722.593 223.66V226.409H722.057Z' fill='white' />
				</g>
			</g>
			<g id='V Ersboda C'>
				<circle id='Ellipse 153' cx='589.529' cy='82.1417' r='1.36903' fill='white' />
				<text transform='translate(587.16 71.1895)' fill='#282828'  ><tspan x='0.629917' y='5.49132'>V Ersboda C</tspan></text>
				<circle id='Ellipse 155' cx='589.529' cy='88.987' r='1.36903' fill='white' />
			</g>
			<g id='Kylgränd'>
				<text transform='translate(501.232 103.413) rotate(-45)' fill='#282828'  ><tspan x='0.844135' y='5.49132'>Kylgränd</tspan></text>
				<circle id='Ellipse 159' cx='518.34' cy='82.1417' r='1.36903' fill='white' />
			</g>
			<g id='Snipgränd'>
				<circle id='Ellipse 156' cx='548.459' cy='82.1417' r='1.36903' fill='white' />
				<text transform='translate(545.721 71.1895)' fill='#282828'  ><tspan x='0.186256' y='5.49132'>Snipgränd</tspan></text>
				<circle id='Ellipse 158' cx='548.459' cy='88.987' r='1.36903' fill='white' />
			</g>
			<g id='Regementet'>
				<text transform='translate(495.066 257.378)' fill='#868686'  ><tspan x='0' y='5.49132'>Regementet</tspan></text>
				<g id='arrow_upward_FILL0_wght700_GRAD0_opsz48 7'>
					<path id='Vector_9' d='M491.228 259.597L491.228 262.346L492.465 261.103L492.848 261.485L490.96 263.373L489.071 261.485L489.448 261.103L490.691 262.346L490.691 259.597L491.228 259.597Z' fill='white' />
				</g>
			</g>
			<g id='Samhällsvetarhuset'>
				<text transform='translate(729.17 340.888)' fill='#282828'  ><tspan x='0' y='5.49132'>Samhällsvetarhuset</tspan></text>
				<circle cx='723.694' cy='344.996' r='1.36903' fill='white' />
			</g>
			<g id='Liljansberget'>
				<text transform='translate(729.17 299.818)' fill='#282828'  ><tspan x='0' y='5.49132'>Liljansberget</tspan></text>
				<circle id='Ellipse 34_3' cx='723.694' cy='303.925' r='1.36903' fill='white' />
			</g>
		</g>
	)
}
