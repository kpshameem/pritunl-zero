/// <reference path="../References.d.ts"/>
import * as React from 'react';
import * as PolicyTypes from '../types/PolicyTypes';
import PageSwitch from './PageSwitch';
import PageSelectButton from './PageSelectButton';

interface Props {
	rule: PolicyTypes.Rule;
	onChange: (state: PolicyTypes.Rule) => void;
}

interface State {
	addValue: string;
}

const css = {
	item: {
		margin: '9px 5px 0 5px',
		height: '20px',
	} as React.CSSProperties,
};

const operatingSystems: {[key: string]: string} = {
	linux: 'Linux',
	macos_1010: 'macOS 10.10',
	macos_1011: 'macOS 10.11',
	macos_1012: 'macOS 10.12',
	macos_1013: 'macOS 10.13',
	windows_xp: 'Windows XP',
	windows_7: 'Windows 7',
	windows_vista: 'Windows Vista',
	windows_8: 'Windows 8',
	windows_10: 'Windows 10',
	chrome_os: 'Chrome OS',
	ios_8: 'iOS 8',
	ios_9: 'iOS 9',
	ios_10: 'iOS 10',
	ios_11: 'iOS 11',
	ios_12: 'iOS 12',
	android_4: 'Android KitKat 4.4',
	android_5: 'Android Lollipop 5.0',
	android_6: 'Android Marshmallow 6.0',
	android_7: 'Android Nougat 7.0',
	android_8: 'Android 8.0',
	blackberry_10: 'Blackerry 10',
	windows_phone: 'Windows Phone',
	firefox_os: 'Firefox OS',
	kindle: 'Kindle',
};

const browsers: {[key: string]: string} = {
	chrome: 'Chrome',
	chrome_mobile: 'Chrome Mobile',
	safari: 'Safari',
	safari_mobile: 'Safari Mobile',
	firefox: 'Firefox',
	firefox_mobile: 'Firefox Mobile',
	edge: 'Microsoft Edge',
	internet_explorer: 'Internet Explorer',
	internet_explorer_mobile: 'Internet Explorer Mobile',
	opera: 'Opera',
	opera_mobile: 'Opera Mobile',
};

const locations: {[key: string]: string} = {
	US: 'United States',
	US_AL: 'Alabama, US',
	US_AK: 'Alaska, US',
	US_AZ: 'Arizona, US',
	US_AR: 'Arkansas, US',
	US_CA: 'California, US',
	US_CO: 'Colorado, US',
	US_CT: 'Connecticut, US',
	US_DE: 'Delaware, US',
	US_FL: 'Florida, US',
	US_GA: 'Georgia, US',
	US_HI: 'Hawaii, US',
	US_ID: 'Idaho, US',
	US_IL: 'Illinois, US',
	US_IN: 'Indiana, US',
	US_IA: 'Iowa, US',
	US_KS: 'Kansas, US',
	US_KY: 'Kentucky, US',
	US_LA: 'Louisiana, US',
	US_ME: 'Maine, US',
	US_MD: 'Maryland, US',
	US_MA: 'Massachusetts, US',
	US_MI: 'Michigan, US',
	US_MN: 'Minnesota, US',
	US_MS: 'Mississippi, US',
	US_MO: 'Missouri, US',
	US_MT: 'Montana, US',
	US_NE: 'Nebraska, US',
	US_NV: 'Nevada, US',
	US_NH: 'New Hampshire, US',
	US_NJ: 'New Jersey, US',
	US_NM: 'New Mexico, US',
	US_NY: 'New York, US',
	US_NC: 'North Carolina, US',
	US_ND: 'North Dakota, US',
	US_OH: 'Ohio, US',
	US_OK: 'Oklahoma, US',
	US_OR: 'Oregon, US',
	US_PA: 'Pennsylvania, US',
	US_RI: 'Rhode Island, US',
	US_SC: 'South Carolina, US',
	US_SD: 'South Dakota, US',
	US_TN: 'Tennessee, US',
	US_TX: 'Texas, US',
	US_UT: 'Utah, US',
	US_VT: 'Vermont, US',
	US_VA: 'Virginia, US',
	US_WA: 'Washington, US',
	US_DC: 'Washington DC, US',
	US_WV: 'West Virginia, US',
	US_WI: 'Wisconsin, US',
	US_WY: 'Wyoming, US',
	AF: 'Afghanistan',
	AX: 'Åland Islands',
	AL: 'Albania',
	DZ: 'Algeria',
	AS: 'American Samoa',
	AD: 'Andorra',
	AO: 'Angola',
	AI: 'Anguilla',
	AQ: 'Antarctica',
	AG: 'Antigua and Barbuda',
	AR: 'Argentina',
	AM: 'Armenia',
	AW: 'Aruba',
	AU: 'Australia',
	AT: 'Austria',
	AZ: 'Azerbaijan',
	BS: 'Bahamas',
	BH: 'Bahrain',
	BD: 'Bangladesh',
	BB: 'Barbados',
	BY: 'Belarus',
	BE: 'Belgium',
	BZ: 'Belize',
	BJ: 'Benin',
	BM: 'Bermuda',
	BT: 'Bhutan',
	BO: 'Bolivia',
	BQ: 'Bonaire',
	BA: 'Bosnia and Herzegovina',
	BW: 'Botswana',
	BV: 'Bouvet Island',
	BR: 'Brazil',
	IO: 'British Indian Ocean Territory',
	BN: 'Brunei Darussalam',
	BG: 'Bulgaria',
	BF: 'Burkina Faso',
	BI: 'Burundi',
	CV: 'Cabo Verde',
	KH: 'Cambodia',
	CM: 'Cameroon',
	CA: 'Canada',
	KY: 'Cayman Islands',
	CF: 'Central African Republic',
	TD: 'Chad',
	CL: 'Chile',
	CN: 'China',
	CX: 'Christmas Island',
	CC: 'Cocos Islands',
	CO: 'Colombia',
	KM: 'Comoros',
	CG: 'Congo',
	CD: 'Congo Democratic Republic',
	CK: 'Cook Islands',
	CR: 'Costa Rica',
	CI: 'Côte dIvoire',
	HR: 'Croatia',
	CU: 'Cuba',
	CW: 'Curaçao',
	CY: 'Cyprus',
	CZ: 'Czechia',
	DK: 'Denmark',
	DJ: 'Djibouti',
	DM: 'Dominica',
	DO: 'Dominican Republic',
	EC: 'Ecuador',
	EG: 'Egypt',
	SV: 'El Salvador',
	GQ: 'Equatorial Guinea',
	ER: 'Eritrea',
	EE: 'Estonia',
	ET: 'Ethiopia',
	FK: 'Falkland Islands',
	FO: 'Faroe Islands',
	FJ: 'Fiji',
	FI: 'Finland',
	FR: 'France',
	GF: 'French Guiana',
	PF: 'French Polynesia',
	TF: 'French Southern Territories',
	GA: 'Gabon',
	GM: 'Gambia',
	GE: 'Georgia',
	DE: 'Germany',
	GH: 'Ghana',
	GI: 'Gibraltar',
	GR: 'Greece',
	GL: 'Greenland',
	GD: 'Grenada',
	GP: 'Guadeloupe',
	GU: 'Guam',
	GT: 'Guatemala',
	GG: 'Guernsey',
	GN: 'Guinea',
	GW: 'Guinea-Bissau',
	GY: 'Guyana',
	HT: 'Haiti',
	HM: 'Heard Island and McDonald Islands',
	VA: 'Holy See',
	HN: 'Honduras',
	HK: 'Hong Kong',
	HU: 'Hungary',
	IS: 'Iceland',
	IN: 'India',
	ID: 'Indonesia',
	IR: 'Iran',
	IQ: 'Iraq',
	IE: 'Ireland',
	IM: 'Isle of Man',
	IL: 'Israel',
	IT: 'Italy',
	JM: 'Jamaica',
	JP: 'Japan',
	JE: 'Jersey',
	JO: 'Jordan',
	KZ: 'Kazakhstan',
	KE: 'Kenya',
	KI: 'Kiribati',
	KP: 'North Korea',
	KR: 'South Korea',
	KW: 'Kuwait',
	KG: 'Kyrgyzstan',
	LA: 'Lao Peoples',
	LV: 'Latvia',
	LB: 'Lebanon',
	LS: 'Lesotho',
	LR: 'Liberia',
	LY: 'Libya',
	LI: 'Liechtenstein',
	LT: 'Lithuania',
	LU: 'Luxembourg',
	MO: 'Macao',
	MK: 'Macedonia',
	MG: 'Madagascar',
	MW: 'Malawi',
	MY: 'Malaysia',
	MV: 'Maldives',
	ML: 'Mali',
	MT: 'Malta',
	MH: 'Marshall Islands',
	MQ: 'Martinique',
	MR: 'Mauritania',
	MU: 'Mauritius',
	YT: 'Mayotte',
	MX: 'Mexico',
	FM: 'Micronesia',
	MD: 'Moldova',
	MC: 'Monaco',
	MN: 'Mongolia',
	ME: 'Montenegro',
	MS: 'Montserrat',
	MA: 'Morocco',
	MZ: 'Mozambique',
	MM: 'Myanmar',
	NA: 'Namibia',
	NR: 'Nauru',
	NP: 'Nepal',
	NL: 'Netherlands',
	NC: 'New Caledonia',
	NZ: 'New Zealand',
	NI: 'Nicaragua',
	NE: 'Niger',
	NG: 'Nigeria',
	NU: 'Niue',
	NF: 'Norfolk Island',
	MP: 'Northern Mariana Islands',
	NO: 'Norway',
	OM: 'Oman',
	PK: 'Pakistan',
	PW: 'Palau',
	PS: 'Palestine, State of',
	PA: 'Panama',
	PG: 'Papua New Guinea',
	PY: 'Paraguay',
	PE: 'Peru',
	PH: 'Philippines',
	PN: 'Pitcairn',
	PL: 'Poland',
	PT: 'Portugal',
	PR: 'Puerto Rico',
	QA: 'Qatar',
	RE: 'Réunion',
	RO: 'Romania',
	RU: 'Russian Federation',
	RW: 'Rwanda',
	BL: 'Saint Barthélemy',
	SH: 'Saint Helena',
	KN: 'Saint Kitts and Nevis',
	LC: 'Saint Lucia',
	MF: 'Saint Martin',
	PM: 'Saint Pierre and Miquelon',
	VC: 'Saint Vincent and the Grenadines',
	WS: 'Samoa',
	SM: 'San Marino',
	ST: 'Sao Tome and Principe',
	SA: 'Saudi Arabia',
	SN: 'Senegal',
	RS: 'Serbia',
	SC: 'Seychelles',
	SL: 'Sierra Leone',
	SG: 'Singapore',
	SX: 'Sint Maarten',
	SK: 'Slovakia',
	SI: 'Slovenia',
	SB: 'Solomon Islands',
	SO: 'Somalia',
	ZA: 'South Africa',
	GS: 'South Georgia and the South Sandwich Islands',
	SS: 'South Sudan',
	ES: 'Spain',
	LK: 'Sri Lanka',
	SD: 'Sudan',
	SR: 'Suriname',
	SJ: 'Svalbard and Jan Mayen',
	SZ: 'Swaziland',
	SE: 'Sweden',
	CH: 'Switzerland',
	SY: 'Syrian Arab Republic',
	TW: 'Taiwan',
	TJ: 'Tajikistan',
	TZ: 'Tanzania',
	TH: 'Thailand',
	TL: 'Timor-Leste',
	TG: 'Togo',
	TK: 'Tokelau',
	TO: 'Tonga',
	TT: 'Trinidad and Tobago',
	TN: 'Tunisia',
	TR: 'Turkey',
	TM: 'Turkmenistan',
	TC: 'Turks and Caicos Islands',
	TV: 'Tuvalu',
	UG: 'Uganda',
	UA: 'Ukraine',
	AE: 'United Arab Emirates',
	GB: 'United Kingdom',
	UM: 'United States Minor Outlying Islands',
	UY: 'Uruguay',
	UZ: 'Uzbekistan',
	VU: 'Vanuatu',
	VE: 'Venezuela',
	VN: 'Viet Nam',
	VG: 'British Virgin Islands',
	VI: 'US Virgin Islands',
	WF: 'Wallis and Futuna',
	EH: 'Western Sahara',
	YE: 'Yemen',
	ZM: 'Zambia',
	ZW: 'Zimbabwe',
};

export default class PolicyRule extends React.Component<Props, State> {
	constructor(props: any, context: any) {
		super(props, context);
		this.state = {
			addValue: '',
		};
	}

	clone(): PolicyTypes.Rule {
		return {
			...this.props.rule,
		};
	}

	onAddValue = (value: string): void => {
		let rule = this.clone();

		let values = [
			...rule.values,
		];

		if (values.indexOf(value) === -1) {
			values.push(value);
		}

		values.sort();

		rule.values = values;

		this.props.onChange(rule);

		this.setState({
			...this.state,
		});
	}

	onRemoveValue(value: string): void {
		let rule = this.clone();

		let values = [
			...rule.values,
		];

		let i = values.indexOf(value);
		if (i === -1) {
			return;
		}

		values.splice(i, 1);

		rule.values = values;

		this.props.onChange(rule);
	}

	optionsSelect(): JSX.Element {
		let rule = this.props.rule;
		let defaultOption: string;

		let label: string;
		let selectLabel: string;
		let options: {[key: string]: string};
		switch (this.props.rule.type) {
			case 'operating_system':
				label = 'Permitted Operating Systems';
				selectLabel = 'Operating Systems';
				options = operatingSystems;
				break;
			case 'browser':
				label = 'Permitted Browsers';
				selectLabel = 'Browsers';
				options = browsers;
				break;
			case 'location':
				label = 'Permitted Locations';
				selectLabel = 'Locations';
				options = locations;
				break;
		}

		let optionsSelect: JSX.Element[] = [];
		for (let option in options) {
			if (!options.hasOwnProperty(option)) {
				continue;
			}
			if (!defaultOption) {
				defaultOption = option;
			}

			optionsSelect.push(
				<option key={option} value={option}>{options[option]}</option>,
			);
		}

		let values: JSX.Element[] = [];
		for (let value of rule.values || []) {
			values.push(
				<div
					className="pt-tag pt-tag-removable pt-intent-primary"
					style={css.item}
					key={value}
				>
					{options[value] || value}
					<button
						className="pt-tag-remove"
						onMouseUp={(): void => {
							this.onRemoveValue(value);
						}}
					/>
				</div>,
			);
		}

		return <div>
			<PageSwitch
				label={selectLabel}
				checked={rule.values != null}
				onToggle={(): void => {
					let state = this.clone();
					state.values = rule.values == null ? [] : null;
					this.props.onChange(state);
				}}
			/>
			<PageSwitch
				label="Disabled User on Failure"
				checked={rule.disable}
				hidden={rule.values == null}
				onToggle={(): void => {
					let state = this.clone();
					state.disable = !state.disable;
					this.props.onChange(state);
				}}
			/>
			<label
				className="pt-label"
				hidden={rule.values == null}
			>
				{label}
				<div>
					{values}
				</div>
			</label>
			<PageSelectButton
				hidden={rule.values == null}
				buttonClass="pt-intent-success pt-icon-add"
				label="Add"
				value={this.state.addValue}
				onChange={(val): void => {
					this.setState({
						...this.state,
						addValue: val,
					});
				}}
				onSubmit={(): void => {
					this.onAddValue(this.state.addValue || defaultOption);
				}}
			>
				{optionsSelect}
			</PageSelectButton>
		</div>;
	}

	render(): JSX.Element {
		let rule = this.props.rule;

		let options: JSX.Element;
		switch (rule.type) {
			case 'operating_system':
				options = this.optionsSelect();
				break;
			case 'browser':
				options = this.optionsSelect();
				break;
			case 'location':
				options = this.optionsSelect();
				break;
		}

		return <div>
			{options}
		</div>;
	}
}
