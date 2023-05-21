import * as S from "./styles";
import Image from "next/image";
import Logo from "/public/img/icon-512.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll/modules";
import { useState, useEffect } from "react";

function Nav() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		document.body.style.overflowY = visible ? "hidden" : "auto";
	}, [visible]);

	return (
		<>
			<S.Wrapper>
				<S.Desktop>
					<li>
						<Link
							activeClass="active"
							to="Price"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Precio
						</Link>
					</li>
					<li>
						<Link
							activeClass="active"
							to="Category"
							spy={true}
							smooth={true}
							offset={20}
							duration={500}
						>
							Modalides
						</Link>
					</li>
					<li>
						<Image
							src={Logo}
							alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
							width={120}
							height={120}
						/>
					</li>
					<li>
						<Link
							activeClass="active"
							to="Times"
							spy={true}
							smooth={true}
							offset={30}
							duration={500}
						>
							Horarios
						</Link>
					</li>
					<li>
						<S.BtnLogin href="https://easy.trainingym.com/equilibriofitness/login">
							Login
						</S.BtnLogin>
					</li>
				</S.Desktop>
				<S.Mobile>
					<Image
						src={Logo}
						alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
						width={100}
						height={100}
					/>
					<AiOutlineMenu size={35} onClick={() => setVisible(true)} />
				</S.Mobile>
			</S.Wrapper>
			{visible && (
				<S.MobileContent>
					<IoClose size={45} onClick={() => setVisible(false)} />
					<ul>
						<li>
							<Link
								activeClass="active"
								to="Price"
								spy={true}
								smooth={true}
								offset={-10}
								duration={500}
								onClick={() => setVisible(false)}
							>
								Precio
							</Link>
						</li>
						<li>
							<Link
								activeClass="active"
								to="Category"
								spy={true}
								smooth={true}
								offset={10}
								duration={500}
								onClick={() => setVisible(false)}
							>
								Modalides
							</Link>
						</li>
						<li>
							<Link
								activeClass="active"
								to="Times"
								spy={true}
								smooth={true}
								offset={20}
								duration={500}
								onClick={() => setVisible(false)}
							>
								Horarios
							</Link>
						</li>
						<li>
							<a href="https://easy.trainingym.com/equilibriofitness/login">Login</a>
						</li>
					</ul>
				</S.MobileContent>
			)}
		</>
	);
}

export default Nav;
