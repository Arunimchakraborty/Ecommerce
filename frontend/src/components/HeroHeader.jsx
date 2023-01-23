import {
	createStyles,
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
  Anchor,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import kulimg from "../assets/ecom.svg";

const useStyles = createStyles((theme) => ({
	inner: {
		display: "flex",
		justifyContent: "space-between",
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
	},

	content: {
		maxWidth: 480,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 44,
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan("xs")]: {
			fontSize: 28,
		},
	},

	control: {
		[theme.fn.smallerThan("xs")]: {
			flex: 1,
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},

	highlight: {
		position: "relative",
		backgroundColor: theme.fn.variant({
			variant: "light",
			color: theme.primaryColor,
		}).background,
		borderRadius: theme.radius.sm,
		padding: "4px 12px",
	},
}));

export function HeroHeader(props) {
	const { classes } = useStyles();
	return (
		<div>
			<Container>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							A <span className={classes.highlight}>modern</span> Ecommerce
							website
						</Title>
						<Text color="dimmed" mt="md">
							A fully functional accessible web Ecommerce platform faster than
							ever – Includes more than 120 products cover you in any situation
						</Text>

						<List
							mt={30}
							spacing="sm"
							size="sm"
							icon={
								<ThemeIcon size={20} radius="xl">
									<IconCheck size={12} stroke={1.5} />
								</ThemeIcon>
							}
						>
							<List.Item>
								<b>Frontend Created in React</b>
							</List.Item>
							<List.Item>
								<b>Backend CMS in Strapi headless CMS</b>
							</List.Item>
						</List>

						<Group mt={30}>
							<Button
								radius="xl"
								size="md"
								className={classes.control}
								onClick={() => {
									props.scrollref.current.scrollIntoView({
										behavior: "smooth",
										block: "start",
										inline: "nearest",
									});
								}}
							>
								Get started
							</Button>
							<Button
								variant="default"
								radius="xl"
								size="md"
								className={classes.control}
							>
                <Anchor href="https://github.com/Arunimchakraborty/Ecommerce">
								  Source code
                </Anchor>
							</Button>
						</Group>
					</div>
					<Image src={kulimg} className={classes.image} />
				</div>
			</Container>
		</div>
	);
}
