import { FormInputDate, FormInputText } from "@/components/FormInput";
import fancyId from "@/utils/fancyId";
import { CheckBox, CheckBoxOutlineBlank, Clear } from "@mui/icons-material";
import {
	Checkbox,
	FormControlLabel,
	Grid,
	IconButton,
	MenuItem,
	Stack,
} from "@mui/material";
import type { Dayjs } from "dayjs";
import { Fragment } from "react";

interface Props {
	id: number;
	control: any;
	label?: string;
	educationLevel: Array<string>;
	handleDelete: (id: number) => void;
	fromDate: Dayjs | null;
	toDate: Dayjs | null;
	setFromDate: any;
	setToDate: any;
	handleCurrentSchoolSelect: () => void;
	isCurrentSchool: boolean;
	handleInstitutionChange?: (e: any) => void;
}

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

const EducationTextFields = ({
	id,
	control,
	label,
	educationLevel,
	handleDelete,
	fromDate,
	toDate,
	setFromDate,
	setToDate,
	handleCurrentSchoolSelect,
	isCurrentSchool,
	handleInstitutionChange,
	...rest
}: Props) => {
	return (
		<Fragment>
			<Grid item xs={11}>
				{/*<TextField*/}
				{/*	name="institution"*/}
				{/*	margin="dense"*/}
				{/*	size="medium"*/}
				{/*	label="Institution name"*/}
				{/*	type="text"*/}
				{/*	onChange={handleInstitutionChange}*/}
				{/*/>*/}
				<FormInputText
					required
					name="institution"
					margin="dense"
					size="medium"
					control={control}
					label="Institution name"
					type="text"
				/>
				<FormInputText
					required
					select
					autoFocus={false}
					margin="dense"
					name="education_level"
					placeholder=""
					size="medium"
					control={control}
					label="Education level"
					type="text"
				>
					{educationLevel.map((item: string) => (
						<MenuItem key={fancyId()} value={item}>
							{item}
						</MenuItem>
					))}
				</FormInputText>
				<FormInputText
					required
					name="course"
					margin="dense"
					size="medium"
					control={control}
					label="Course"
					type="text"
				/>
				<Stack
					marginTop={2}
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<FormInputDate
						required
						name="from_date"
						disableFuture
						control={control}
						label="From date"
						openTo="year"
						views={["year", "month", "day"]}
						format="LL"
					/>

					<FormInputDate
						disabled={isCurrentSchool}
						disableFuture
						name="to_date"
						control={control}
						label="To date"
						openTo="year"
						views={["year", "month", "day"]}
						format="LL"
						// defaultValue={defaultValue}
					/>

					{/*<Checkbox*/}
					{/*	label="Current school"*/}
					{/*	sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}*/}
					{/*/>*/}
				</Stack>

				<FormControlLabel
					control={<Checkbox onChange={() => handleCurrentSchoolSelect()} />}
					label="Current school"
				/>

				{/*<FormControl size="small" variant="outlined">*/}
				{/*  <FormLabel component="legend">{label}</FormLabel>*/}

				{/*  <div>*/}
				{/*    <FormControlLabel*/}
				{/*      <Checkbox*/}
				{/*        onChange={() => handleCurrentSchoolSelect()}*/}
				{/*        />*/}
				{/*      // label="Current school"*/}
				{/*    />*/}
				{/*  </div>*/}
				{/*</FormControl>*/}

				{/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
				{/*	<Stack*/}
				{/*		direction="row"*/}
				{/*		justifyContent="center"*/}
				{/*		alignItems="center"*/}
				{/*		spacing={2}*/}
				{/*	>*/}
				{/*		<DatePicker*/}
				{/*			label="From date"*/}
				{/*			value={fromDate}*/}
				{/*			onChange={(newValue) => setFromDate(newValue)}*/}
				{/*		/>*/}
				{/*		<DatePicker*/}
				{/*			label="To date"*/}
				{/*			value={toDate}*/}
				{/*			onChange={(newValue) => setToDate(newValue)}*/}
				{/*		/>*/}
				{/*	</Stack>*/}
				{/*</LocalizationProvider>*/}

				{/*<FormInputText*/}
				{/*	name="bio"*/}
				{/*	margin="dense"*/}
				{/*	size="medium"*/}
				{/*	control={control}*/}
				{/*	label="Activities"*/}
				{/*	placeholder=""*/}
				{/*	type="text"*/}
				{/*	multiline*/}
				{/*	rows={4}*/}
				{/*/>*/}
			</Grid>
			<Grid item xs={1}>
				{id > 0 ? (
					<IconButton aria-label="delete" onClick={() => handleDelete(id)}>
						<Clear color="error" />
					</IconButton>
				) : null}
			</Grid>
		</Fragment>
	);
};

export default EducationTextFields;
