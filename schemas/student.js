import icon from 'react-icons/lib/md/face'

export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  icon,
  fields: [
    {
      name: 'firstName',
      title: 'First name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'lastName',
      title: 'Last name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.firstName}–${doc.lastName}`,
        maxLength: 100
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'studentImage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'website',
      title: 'Student website',
      type: 'url'
    }
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'studentImage'
    },
    prepare (selection) {
      const { firstName, lastName, media } = selection
      return {
        title: `${firstName} ${lastName}`,
        media
      }
    }
  }
}
