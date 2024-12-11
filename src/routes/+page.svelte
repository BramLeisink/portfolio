<script lang="ts">
	import { personalInfo, skills, projects } from '$lib/data';
	import {
		LinkedinIcon,
		GithubIcon,
		ExternalLinkIcon,
		CodeIcon,
		MailIcon,
		MapPinIcon,
		DownloadIcon
	} from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
	<div class="mx-auto max-w-6xl space-y-12">
		<!-- Header Section with Contact Modal -->
		<section class="rounded-2xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-md">
			<div class="mx-auto max-w-md">
				<h1 class="mb-2 text-4xl font-bold text-gray-800">{personalInfo.name}</h1>
				<p class="mb-4 text-xl text-gray-600">{personalInfo.tagline}</p>
				<p class="mb-6 text-gray-500">
					{personalInfo.bio}
				</p>

				<div class="flex justify-center space-x-4">
					{#each Object.entries(personalInfo.socialLinks) as [platform, link]}
						<Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger>
									<Button variant="outline" size="icon" href={link} target="_blank">
										{#if platform === 'linkedin'}
											<LinkedinIcon class="h-5 w-5" />
										{:else if platform === 'github'}
											<GithubIcon class="h-5 w-5" />
										{/if}
									</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									>{platform.charAt(0).toUpperCase() + platform.slice(1)}</Tooltip.Content
								>
							</Tooltip.Root>
						</Tooltip.Provider>
					{/each}

					<Dialog.Root>
						<Dialog.Trigger>
							<Button variant="outline" size="icon">
								<MailIcon class="h-5 w-5" />
							</Button>
						</Dialog.Trigger>
						<Dialog.Content>
							<Dialog.Header>
								<Dialog.Title>Contact Informatie</Dialog.Title>
								<Dialog.Description>
									<div class="space-y-2">
										<p class="flex items-center">
											<MailIcon class="mr-2 h-4 w-4" />
											{personalInfo.email}
										</p>
										<p class="flex items-center">
											<MapPinIcon class="mr-2 h-4 w-4" />
											{personalInfo.location}
										</p>
									</div>
								</Dialog.Description>
							</Dialog.Header>
							<Dialog.Footer>
								<Button on:click={() => navigator.clipboard.writeText(personalInfo.email)}>
									Kopieer E-mail
								</Button>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Root>

					<!-- <Button variant="outline" size="icon">
						<DownloadIcon class="h-5 w-5" />
					</Button> -->
				</div>
			</div>
		</section>

		<!-- Skills Section with Animated Tags -->
		<section>
			<h2 class="mb-6 text-2xl font-semibold text-gray-800">Vaardigheden</h2>
			<div class="flex flex-wrap gap-3">
				{#each skills as skill}
					<span
						class="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-200"
					>
						{skill}
					</span>
				{/each}
			</div>
		</section>

		<!-- Projects Section with Enhanced Cards -->
		<section>
			<h2 class="mb-6 text-2xl font-semibold text-gray-800">Projecten</h2>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
				{#each projects as project}
					<Card.Root
						class="border-2 border-transparent transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
					>
						{#if project.imageUrl}
							<div class="relative h-48 w-full overflow-hidden rounded-t-xl">
								<img
									src={project.imageUrl}
									alt={project.title}
									class="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
								/>
							</div>
						{/if}
						<Card.Header>
							<Card.Title class="text-xl text-gray-800">{project.title}</Card.Title>
						</Card.Header>
						<Card.Content>
							<p class="mb-4 text-gray-600">{project.description}</p>
							<div class="mb-4 flex flex-wrap gap-2">
								{#each project.technologies as tech}
									<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
										{tech}
									</span>
								{/each}
							</div>
							<div class="flex space-x-2">
								{#if project.githubLink}
									<Tooltip.Provider>
										<Tooltip.Root>
											<Tooltip.Trigger>
												<Button
													variant="outline"
													size="icon"
													href={project.githubLink}
													target="_blank"
												>
													<CodeIcon class="h-4 w-4" />
												</Button>
											</Tooltip.Trigger>
											<Tooltip.Content>Bekijk Code</Tooltip.Content>
										</Tooltip.Root>
									</Tooltip.Provider>
								{/if}
								{#if project.demoLink}
									<Tooltip.Provider>
										<Tooltip.Root>
											<Tooltip.Trigger>
												<Button
													variant="outline"
													size="icon"
													href={project.demoLink}
													target="_blank"
												>
													<ExternalLinkIcon class="h-4 w-4" />
												</Button>
											</Tooltip.Trigger>
											<Tooltip.Content>Live Demo</Tooltip.Content>
										</Tooltip.Root>
									</Tooltip.Provider>
								{/if}
							</div>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	</div>
</div>
