import type { HeroeType, JobType, PostType, ProfileType, ProjectType } from "@/types";
import siteData from "@/data.json";

type SiteData = {
  profile: ProfileType[];
  jobs: JobType[];
  projects: ProjectType[];
  posts: PostType[];
  heroes: HeroeType[];
};

const data = siteData as SiteData;

export function getProfile(): ProfileType[] {
  return data.profile;
}

export function getJobs(): JobType[] {
  return data.jobs;
}

export function getProjects(): ProjectType[] {
  return data.projects;
}

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return data.projects.find((project) => project.slug === slug);
}

export function getPosts(): PostType[] {
  return data.posts;
}

export function getPostBySlug(slug: string): PostType | undefined {
  return data.posts.find((post) => post.slug === slug);
}

export function getHeroes(): HeroeType[] {
  return data.heroes;
}
