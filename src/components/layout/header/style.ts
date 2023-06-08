import styled from "styled-components"
import { GV } from "../../../utils/style.util"

export const HeaderContainer = styled.header<{ isHide: boolean, isBg: boolean }>`
	position: fixed;
	top: 0;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 8000;
	width: 100%;
	transition: all ease-in-out .3s;

	${({ isBg }) => isBg ? `
		background: ${GV("bg-sub")};
		backdrop-filter: blur(10px);
	` : ``}
	border-bottom: 1px solid #D0D0E360;
	transition: all ease-in-out .3s;

	${({ isHide }) => isHide ? `
		transform: translate(-50%, -100%);
	` : ``}
`

export const HeaderWrapper = styled.menu`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1440px;
	padding: 0 2rem;
	margin: 0 auto;
	height: 100px;
	gap: 2rem;

	> div {
		> :not(:first-child) {
			@media screen and (max-width: 600px) {
				display: none;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`