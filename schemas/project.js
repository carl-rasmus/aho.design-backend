import icon from 'react-icons/lib/md/layers'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Project title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Project subtitle',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      description: 'This image will appear on top of articles, on thumbnail and other prominent places',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'projectDescription',
      title: 'Project description',
      type: 'blockContent',
      description: 'Short description of the project',
      validation: Rule => Rule.required()
    },
    {
      name: 'projectImages',
      title: 'Additional videos and images',
      description: 'Video: Upload or copy/paste URL. Image format: jpg, png, gif, svg or tiff',
      type: 'array',
      of: [
        {
          name: 'supportImage',
          title: 'Upload image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'videoUpload',
          title: 'Upload video',
          type: 'file'
        },
        {
          title: 'Video URL',
          name: 'videoUrl',
          type: 'object',
          fields: [{
            title: 'Url',
            name: 'url',
            type: 'url'
          }]
          }
      ]
    },
    {
      name: 'course',
      title: 'Course',
      type: 'reference',
      to: [{type: 'course'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'task',
      title: 'Task',
      type: 'reference',
      to: [{type: 'task'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'authors',
      title: 'Designer (student)',
      description: 'Select multiple for group projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'student'}]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'website',
      title: 'Project website',
      type: 'url'
    }
  ],
  preview: {
    select: {
      name: 'name',
      courseName: 'course.name',
      courseYear: 'course.year',
      media: 'headerImage'
    },
    prepare (selection) {
      const { name, courseName, courseYear, media } = selection
      return {
        title: `${name}`,
        subtitle: `${courseName}, ${courseYear}`,
        media
      }
    }
  }
}
