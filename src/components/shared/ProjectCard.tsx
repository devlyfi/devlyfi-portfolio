"use client";

import Link from "next/link";
import Image from "next/image";
import { ProjectCardProps } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link href={`/works/${project.slug}`} className="block group">
      <Card
        className={`overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/40 ${
          isFeatured ? "md:flex md:flex-row" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden bg-muted ${
            isFeatured ? "md:w-1/2" : "aspect-16/10"
          }`}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes={
              isFeatured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            loading="lazy"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-lg">
              {project.category}
            </span>
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-sm line-clamp-2">{project.description}</p>
              <div className="mt-3 flex items-center text-sm font-medium">
                <span>View Project</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-6 ${
            isFeatured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""
          }`}
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {isFeatured && (
            <>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              )}
            </>
          )}

          {!isFeatured && project.year && (
            <p className="text-sm text-muted-foreground">{project.year}</p>
          )}
        </div>
      </Card>
    </Link>
  );
}
