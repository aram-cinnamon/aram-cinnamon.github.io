////////////////////////////////////////////////////////////////////////////////
// utils

function create_array_from_length(how_many_times, do_what) {
	return Array.from(
		{ length: how_many_times },
		(_d, i, _all) => do_what(i),
	);
}

function f(a, b) {
	return a/b;
}

function find_remainder(dividend, divisor) {
	// dividend = numerator
	// divisor = denominator
	const _remainder = dividend % divisor;
	return (_remainder < 0) ? _remainder + divisor : _remainder;
}

////////////////////////////////////////////////////////////////////////////////
const pitch = "pitch";  // null is a rest
const abc = "abc";
const abc_sharp = "abc_sharp";
const abc_flat = "abc_flat";
const is_black_key = "is_black_key";

const PITCH_REMAINDER_TO_INFO = {
	"5.5" : { [pitch]: 5.5 , [abc_sharp]: "B",  [abc_flat]: "B", },
	"5"   : { [pitch]: 5   , [abc_sharp]: "A♯", [abc_flat]: "B♭", [is_black_key]: true },
	"4.5" : { [pitch]: 4.5 , [abc_sharp]: "A",  [abc_flat]: "A", },
	"4"   : { [pitch]: 4   , [abc_sharp]: "G♯", [abc_flat]: "A♭", [is_black_key]: true },
	"3.5" : { [pitch]: 3.5 , [abc_sharp]: "G",  [abc_flat]: "G", },
	"3"   : { [pitch]: 3   , [abc_sharp]: "F♯", [abc_flat]: "G♭", [is_black_key]: true },
	"2.5" : { [pitch]: 2.5 , [abc_sharp]: "F",  [abc_flat]: "F", },
	"2"   : { [pitch]: 2   , [abc_sharp]: "E",  [abc_flat]: "E", },
	"1.5" : { [pitch]: 1.5 , [abc_sharp]: "D♯", [abc_flat]: "E♭", [is_black_key]: true },
	"1"   : { [pitch]: 1   , [abc_sharp]: "D",  [abc_flat]: "D", },
	"0.5" : { [pitch]: 0.5 , [abc_sharp]: "C♯", [abc_flat]: "D♭", [is_black_key]: true },
	"0"   : { [pitch]: 0   , [abc_sharp]: "C",  [abc_flat]: "C", },
};

function map_pitch_to_text(pitch, key){
	if (pitch === null) {
		return "";
	}
	const info = PITCH_REMAINDER_TO_INFO[find_remainder(pitch, 6)];
	if (key === abc) {
		if (info[abc_sharp] === info[abc_flat]) {
			return info[abc_sharp]
		}
		else {
			return `${info[abc_sharp]}/${info[abc_flat]}`
		}
	}
	return info[key];
}

////////////////////////////////////////////////////////////////////////////////

const key_signature = "key_signature";
const staff_pitch_to_info = "staff_pitch_to_info";
// const pitch = "pitch";
const is_treble_clef = "is_treble_clef";
const is_bass_clef = "is_bass_clef";
const is_different_from_c_major = "is_different_from_c_major";

const KEY_SIGNATURE_SHARPS_OR_FLATS_TO_INFO = {
	"none": {
		[key_signature]: "C major",
		[staff_pitch_to_info]: {
			"12"   : { [pitch]: 12 },
			"10.5" : { [pitch]: 10.5 },
			"8.5"  : { [pitch]: 8.5, [is_treble_clef]: true },
			"7"    : { [pitch]: 7, [is_treble_clef]: true },
			"5.5"  : { [pitch]: 5.5, [is_treble_clef]: true },
			"3.5"  : { [pitch]: 3.5, [is_treble_clef]: true },
			"2"    : { [pitch]: 2, [is_treble_clef]: true },
			"0"    : { [pitch]: 0 },
			"-1.5" : { [pitch]: -1.5, [is_bass_clef]: true },
			"-3.5" : { [pitch]: -3.5, [is_bass_clef]: true },
			"-5"   : { [pitch]: -5, [is_bass_clef]: true },
			"-6.5" : { [pitch]: -6.5, [is_bass_clef]: true },
			"-8.5" : { [pitch]: -8.5, [is_bass_clef]: true },
			"-10"  : { [pitch]: -10 },
			"-12"  : { [pitch]: -12 },
		},
	},
	"F♯": {
		[key_signature]: "G major / E minor",
		[staff_pitch_to_info]: {
			"12"   : { [pitch]: 12 },
			"10.5" : { [pitch]: 10.5 },
			"9"    : { [pitch]: 9, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"7"    : { [pitch]: 7, [is_treble_clef]: true },
			"5.5"  : { [pitch]: 5.5, [is_treble_clef]: true },
			"3.5"  : { [pitch]: 3.5, [is_treble_clef]: true },
			"2"    : { [pitch]: 2, [is_treble_clef]: true },
			"0"    : { [pitch]: 0 },
			"-1.5" : { [pitch]: -1.5, [is_bass_clef]: true },
			"-3"   : { [pitch]: -3, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-5"   : { [pitch]: -5, [is_bass_clef]: true },
			"-6.5" : { [pitch]: -6.5, [is_bass_clef]: true },
			"-8.5" : { [pitch]: -8.5, [is_bass_clef]: true },
			"-10"  : { [pitch]: -10 },
			"-12"  : { [pitch]: -12 },
		},
	},
	"F♯ C♯": {
		[key_signature]: "D major / B minor",
		[staff_pitch_to_info]: {
			"12.5"  : { [pitch]: 12.5, [is_different_from_c_major]: true },
			"10.5"  : { [pitch]: 10.5 },
			"9"     : { [pitch]: 9, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"7"     : { [pitch]: 7, [is_treble_clef]: true },
			"5.5"   : { [pitch]: 5.5, [is_treble_clef]: true },
			"3.5"   : { [pitch]: 3.5, [is_treble_clef]: true },
			"2"     : { [pitch]: 2, [is_treble_clef]: true },
			"0.5"   : { [pitch]: 0.5, [is_different_from_c_major]: true },
			"-1.5"  : { [pitch]: -1.5, [is_bass_clef]: true },
			"-3"    : { [pitch]: -3, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-5"    : { [pitch]: -5, [is_bass_clef]: true },
			"-6.5"  : { [pitch]: -6.5, [is_bass_clef]: true },
			"-8.5"  : { [pitch]: -8.5, [is_bass_clef]: true },
			"-10"   : { [pitch]: -10 },
			"-11.5" : { [pitch]: -11.5, [is_different_from_c_major]: true },
		},
	},
	"F♯ C♯ G♯": {
		[key_signature]: "A major / F♯ minor",
		[staff_pitch_to_info]: {
			"12.5"  : { [pitch]: 12.5, [is_different_from_c_major]: true },
			"10.5"  : { [pitch]: 10.5 },
			"9"     : { [pitch]: 9, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"7"     : { [pitch]: 7, [is_treble_clef]: true },
			"5.5"   : { [pitch]: 5.5, [is_treble_clef]: true },
			"4"     : { [pitch]: 4, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"2"     : { [pitch]: 2, [is_treble_clef]: true },
			"0.5"   : { [pitch]: 0.5, [is_different_from_c_major]: true },
			"-1.5"  : { [pitch]: -1.5, [is_bass_clef]: true },
			"-3"    : { [pitch]: -3, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-5"    : { [pitch]: -5, [is_bass_clef]: true },
			"-6.5"  : { [pitch]: -6.5, [is_bass_clef]: true },
			"-8"    : { [pitch]: -8, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-10"   : { [pitch]: -10 },
			"-11.5" : { [pitch]: -11.5, [is_different_from_c_major]: true },
		},
	},
	"F♯ C♯ G♯ D♯": {
		[key_signature]: "E major / C♯ minor",
		[staff_pitch_to_info]: {
			"12.5"  : { [pitch]: 12.5, [is_different_from_c_major]: true },
			"10.5"  : { [pitch]: 10.5 },
			"9"     : { [pitch]: 9, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"7.5"   : { [pitch]: 7.5, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"5.5"   : { [pitch]: 5.5, [is_treble_clef]: true },
			"4"     : { [pitch]: 4, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"2"     : { [pitch]: 2, [is_treble_clef]: true },
			"0.5"   : { [pitch]: 0.5, [is_different_from_c_major]: true },
			"-1.5"  : { [pitch]: -1.5, [is_bass_clef]: true },
			"-3"    : { [pitch]: -3, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-4.5"  : { [pitch]: -4.5, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-6.5"  : { [pitch]: -6.5, [is_bass_clef]: true },
			"-8"    : { [pitch]: -8, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-10"   : { [pitch]: -10 },
			"-11.5" : { [pitch]: -11.5, [is_different_from_c_major]: true },
		},
	},
	"F♯ C♯ G♯ D♯ A♯": {
		[key_signature]: "B major / G minor",
		[staff_pitch_to_info]: {
			"12.5"  : { [pitch]: 12.5, [is_different_from_c_major]: true },
			"11"    : { [pitch]: 11, [is_different_from_c_major]: true },
			"9"     : { [pitch]: 9, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"7.5"   : { [pitch]: 7.5, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"5.5"   : { [pitch]: 5.5, [is_treble_clef]: true },
			"4"     : { [pitch]: 4, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"2"     : { [pitch]: 2, [is_treble_clef]: true },
			"0.5"   : { [pitch]: 0.5, [is_different_from_c_major]: true },
			"-1"    : { [pitch]: -1, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-3"    : { [pitch]: -3, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-4.5"  : { [pitch]: -4.5, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-6.5"  : { [pitch]: -6.5, [is_bass_clef]: true },
			"-8"    : { [pitch]: -8, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-10"   : { [pitch]: -10 },
			"-11.5" : { [pitch]: -11.5, [is_different_from_c_major]: true },
		},
	},
	"F♯ C♯ G♯ D♯ A♯ E♯": {
		[key_signature]: "F♯ major / D minor",
		// TODO
	},
	"F♯ C♯ G♯ D♯ A♯ E♯ B♯": {
		[key_signature]: "C♯ major / A minor",
		// TODO
	},
	"B♭": {
		[key_signature]: "F major / D minor",
		[staff_pitch_to_info]: {
			"12"   : { [pitch]: 12 },
			"10.5" : { [pitch]: 10.5 },
			"8.5"  : { [pitch]: 8.5, [is_treble_clef]: true },
			"7"    : { [pitch]: 7, [is_treble_clef]: true },
			"5"    : { [pitch]: 5, [is_treble_clef]: true, [is_different_from_c_major]: true },
			"3.5"  : { [pitch]: 3.5, [is_treble_clef]: true },
			"2"    : { [pitch]: 2, [is_treble_clef]: true },
			"0"    : { [pitch]: 0 },
			"-1.5" : { [pitch]: -1.5, [is_bass_clef]: true },
			"-3.5" : { [pitch]: -3.5, [is_bass_clef]: true },
			"-5"   : { [pitch]: -5, [is_bass_clef]: true },
			"-7"   : { [pitch]: -7, [is_bass_clef]: true, [is_different_from_c_major]: true },
			"-8.5" : { [pitch]: -8.5, [is_bass_clef]: true },
			"-10"  : { [pitch]: -10 },
			"-12"  : { [pitch]: -12 },
		},
	},
	"B♭ E♭": {
		[key_signature]: "B♭ major / G minor",
		// TODO
	},
	"B♭ E♭ A♭": {
		[key_signature]: "E♭ major / C minor",
		// TODO
	},
	"B♭ E♭ A♭ D♭": {
		[key_signature]: "A♭ major / F minor",
		// TODO
	},
	"B♭ E♭ A♭ D♭ G♭": {
		[key_signature]: "D♭ major / B♭ minor",
		// TODO
	},
	"B♭ E♭ A♭ D♭ G♭ C♭": {
		[key_signature]: "G♭ major / E♭ minor",
		// TODO
	},
	"B♭ E♭ A♭ D♭ G♭ C♭ F♭": {
		[key_signature]: "C♭ major / A♭ minor",
		// TODO
	},
};

// const key_signature = "key_signature";
const sharps_or_flats = "sharps_or_flats";
const time_signature = "time_signature";
const beats_per_minute = "beats_per_minute";
const beats_per_bar = "beats_per_bar";
const notes_per_beat = "notes_per_beat";
const notes_per_bar = "notes_per_bar";

function create_bar(
	key_signature_sharps_or_flats,
	beats_per_minute,
	beats_per_bar,
	notes_per_beat,
) {
	return {
		[key_signature]: {
			[sharps_or_flats]: key_signature_sharps_or_flats,
		},
		[time_signature]: {
			[beats_per_minute]: beats_per_minute,
			[beats_per_bar]: beats_per_bar,
			[notes_per_beat]: notes_per_beat,
			[notes_per_bar]: notes_per_beat*beats_per_bar,
		},
	};
}

const length_before_this_bar = "length_before_this_bar";
const length_before_and_including_this_bar = "length_before_and_including_this_bar";

function add_lengths_to_bars(bars) {
	const new_bars = [];

	let length_before_this_bar_v = 0;
	let length_before_and_including_this_bar_v = 0;
	bars.forEach(
		(bar, i) => {
			length_before_and_including_this_bar_v += bar[time_signature][notes_per_bar];

			const new_bar = {
				...bar,
				[length_before_this_bar]: length_before_this_bar_v,
				[length_before_and_including_this_bar]: length_before_and_including_this_bar_v,
			}
			new_bars.push(new_bar);

			length_before_this_bar_v += bar[time_signature][notes_per_bar];
		},
	);

	return new_bars;
}

const css_class = "css_class";
const texts_and_notes = "texts_and_notes";
const text = "text";
const pitches_and_lengths = "pitches_and_lengths";
const length = "length";

const pitch_interval = "pitch_interval";
const is_first_of_same_pitch = "is_first_of_same_pitch";
const length_before_this_note = "length_before_this_note";

function reshape_parts_to_notes(parts) {
	const new_pitches_and_lengths = [];

	parts.forEach(
		(part) => {
			let prev_pitch = null;
			let length_before_this_note_v = 0;
			part[texts_and_notes].forEach(
				(text_and_notes) => {
					text_and_notes[pitches_and_lengths].forEach(
						(pitch_and_length, i) => {
							const curr_pitch = pitch_and_length[pitch];

							let is_first_of_same_pitch_v = false;
							let pitch_interval_v = null;
							if (prev_pitch === null) {
								is_first_of_same_pitch_v = true;
								pitch_interval_v = null;
								prev_pitch = curr_pitch;
							}
							else if (curr_pitch === null) {
								is_first_of_same_pitch_v = false;
								pitch_interval_v = null;
							}
							else {
								is_first_of_same_pitch_v = (prev_pitch !== curr_pitch);
								pitch_interval_v = - prev_pitch + curr_pitch;
								prev_pitch = curr_pitch;
							}

							const new_pitch_and_length = {
								[css_class]: part[css_class],
								[text]: (i === 0) ? text_and_notes[text] : null,
								[is_first_of_same_pitch]: is_first_of_same_pitch_v,
								[pitch_interval]: pitch_interval_v,
								[length_before_this_note]: length_before_this_note_v,
								...pitch_and_length,
							};
							new_pitches_and_lengths.push(new_pitch_and_length);

							length_before_this_note_v += pitch_and_length[length];
						}
					);
				}
			);
		}
	);

	return new_pitches_and_lengths;
}

function transpose(notes, offset) {
	if (!offset) {
		return notes;
	}

	return notes.map(
		note => ({
			...note,
			[pitch]: (note[pitch] === null) ? null : (note[pitch] + offset),
		})
	);
}

function draw(svg_selector, bars, notes) {
	const BAR_LINE_WIDTH = 1;
	const STAFF_LINE_HEIGHT = 1;
	const WHOLE_NOTE_WIDTH = 180;
	const NOTE_HEIGHT = 12;
	const TEXT_HEIGHT = NOTE_HEIGHT;

	const CHART_WIDTH = WHOLE_NOTE_WIDTH*bars[bars.length - 1][length_before_and_including_this_bar];
	const CHART_HEIGHT = 420;  // TODO: calculate from notes
	const Y_BASELINE = CHART_HEIGHT / 2;

	const chart_svg = d3.select(svg_selector)
		.attr("width",  CHART_WIDTH)
		.attr("height", CHART_HEIGHT)
	;

	const texts_bar_number = chart_svg
	.append("g")
	.selectAll("text").data(bars).enter().append("text")
		.html((bar, i) => i + 1)
		.classed("bar_number", true)
		.attr("font-size", TEXT_HEIGHT)
		.attr("x", bar => bar[length_before_this_bar]*WHOLE_NOTE_WIDTH)
		.attr("y", 0)
	;

	const rects_bar_line = chart_svg
	.append("g")
	.selectAll("rect").data(bars).enter().append("rect")
		.classed("bar_line", true)
		.attr("x", bar => bar[length_before_and_including_this_bar]*WHOLE_NOTE_WIDTH)
		.attr("y", 0)
		.attr("width", BAR_LINE_WIDTH)
		.attr("height", "100%")
	;

	bars.forEach(
		(bar) => {
			const staff_pitch_to_info_v = KEY_SIGNATURE_SHARPS_OR_FLATS_TO_INFO[bar[key_signature][sharps_or_flats]][staff_pitch_to_info];
			bar_staffs = Object.values(staff_pitch_to_info_v);  // TODO: calculate from CHART_HEIGHT

			const rects_staff_line = chart_svg
			.append("g")
			.selectAll("rect").data(bar_staffs).enter().append("rect")
				.classed("staff_line", true)
				.classed("clef", d => d[is_treble_clef] || d[is_bass_clef])
				.attr("x", bar[length_before_this_bar]*WHOLE_NOTE_WIDTH)
				.attr("y", d => Y_BASELINE - d[pitch]*NOTE_HEIGHT)
				.attr("width", bar[time_signature][notes_per_bar]*WHOLE_NOTE_WIDTH)
				.attr("height", STAFF_LINE_HEIGHT)
			;
		},
	)

	const show_text                   = note => note[text];
	const show_pitch                  = note => note[pitch] ?? "";

	const show_abc                    = note => map_pitch_to_text(note[pitch], abc);
	const show_abc_sharp              = note => map_pitch_to_text(note[pitch], abc_sharp);
	const show_abc_flat               = note => map_pitch_to_text(note[pitch], abc_flat);

	const show_abc_and_pitch          = note => note[is_first_of_same_pitch] ? `${map_pitch_to_text(note[pitch], abc)} ${note[pitch] ?? ""}` : "";
	const show_abc_sharp_and_pitch    = note => note[is_first_of_same_pitch] ? `${map_pitch_to_text(note[pitch], abc_sharp)} ${note[pitch] ?? ""}` : "";
	const show_abc_flat_and_pitch     = note => note[is_first_of_same_pitch] ? `${map_pitch_to_text(note[pitch], abc_flat)} ${note[pitch] ?? ""}` : "";

	const show_abc_and_interval       = note => `${map_pitch_to_text(note[pitch], abc)} ${note[pitch_interval] || ""}`;
	const show_abc_sharp_and_interval = note => `${map_pitch_to_text(note[pitch], abc_sharp)} ${note[pitch_interval] || ""}`;
	const show_abc_flat_and_interval  = note => `${map_pitch_to_text(note[pitch], abc_flat)} ${note[pitch_interval] || ""}`;

	const texts_notes = chart_svg
	.append("g")
	.selectAll("text").data(notes).enter().append("text")
		.html(show_abc_and_pitch)
		.attr("class", note => note[css_class])
		.attr("font-size", TEXT_HEIGHT)
		.attr("x", note => note[length_before_this_note]*WHOLE_NOTE_WIDTH + 1)
		.attr("y", note => Y_BASELINE - note[pitch]*NOTE_HEIGHT + (NOTE_HEIGHT - 1)/2)
	;

	const texts_notes_hanging = chart_svg
	.append("g")
	.selectAll("text").data(notes).enter().append("text")
		.html(show_text)
		.attr("class", note => note[css_class])
		.classed("hanging", true)
		.attr("font-size", TEXT_HEIGHT)
		.attr("x", note => note[length_before_this_note]*WHOLE_NOTE_WIDTH + 1)
		.attr("y", note => Y_BASELINE - note[pitch]*NOTE_HEIGHT + (NOTE_HEIGHT - 1)/2)
	;

	const rects_notes = chart_svg
	.append("g")
	.selectAll("rect").data(notes).enter().append("rect")
		.attr("class", note => note[css_class])
		.attr("opacity", note => note[pitch] !== null ? 0.3 : 0)
		.attr("x", note => note[length_before_this_note]*WHOLE_NOTE_WIDTH + 1)
		.attr("y", note => Y_BASELINE - note[pitch]*NOTE_HEIGHT - (NOTE_HEIGHT - 1)/2)
		.attr("width", note => note[length]*WHOLE_NOTE_WIDTH - 1)
		.attr("height", NOTE_HEIGHT)
		.on(
			"click",
			(event, note) => new Audio(`sheet-music/${note[pitch]}.mp3`).play()
		)
	;

	return chart_svg;
};
