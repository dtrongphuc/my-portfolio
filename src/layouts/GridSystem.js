import styled from 'styled-components';

const init = {
	maxWidth: 1140,
	offset: 15,
};

export const Container = styled.div`
	${({ fluid }) => fluid && 'width: 100%'};
	${({ fluid }) => !fluid && `max-width:  ${init.maxWidth}px`};
	margin: 0 auto;
	padding-left: ${init.offset}px;
	padding-right: ${init.offset}px;
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: -${(props) => (props.offset ? props.offset : init.offset)}px;
	margin-right: -${(props) => (props.offset ? props.offset : init.offset)}px;
`;

const getFlexBasisString = (span) => {
	if (!span) return;

	let width = (span / 12) * 100;
	return `
		flex-basis: ${width}%;
		max-width: ${width}%;
	`;
};

const getColOffsetString = (offset) => {
	if (!!offset) return;

	return `
		padding-left: ${offset}px;
		padding-right: ${offset}px;
	`;
};

export const Col = styled.div`
	// Extra small devices (portrait phones, less than 576px)
	flex-basis: 100%;
	flex-grow: 1;
	max-width: 100%;
	padding-left: ${(props) => (props.offset ? props.offset : init.offset)}px;
	padding-right: ${(props) => (props.offset ? props.offset : init.offset)}px;

	// Small devices (landscape phones, 576px and up)
	@media only screen and (min-width: 576px) {
		${({ sm }) => sm && getFlexBasisString(sm)};
		${({ smOffset }) => smOffset && getColOffsetString(smOffset)};
	}

	// Medium devices (tablets, 768px and up)
	@media only screen and (min-width: 768px) {
		${({ md }) => md && getFlexBasisString(md)};
		${({ mdOffset }) => mdOffset && getColOffsetString(mdOffset)};
	}

	// Large devices (desktops, 992px and up)
	@media only screen and (min-width: 992px) {
		${({ lg }) => lg && getFlexBasisString(lg)};
		${({ lgOffset }) => lgOffset && getColOffsetString(lgOffset)};
	}

	// Extra large devices (large desktops, 1200px and up)
	@media only screen and (min-width: 1200px) {
		${({ xs }) => xs && getFlexBasisString(xs)};
		${({ xsOffset }) => xsOffset && getColOffsetString(xsOffset)};
	}
`;
